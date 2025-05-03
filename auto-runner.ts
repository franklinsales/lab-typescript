// poll-runner.ts
// Este script usa polling em vez de eventos do sistema de arquivos
// porque encontramos problemas com a detecção de eventos 'change'
// em determinados ambientes/sistemas de arquivos.

import * as fs from 'fs';
import * as path from 'path';
import { spawn, execSync } from 'child_process';

console.log('🔄 Iniciando monitor de arquivos TypeScript (modo polling)...');
console.log(`📁 Diretório atual: ${process.cwd()}`);

// Usar caminho absoluto para o diretório src
const srcPath = path.resolve('./src');
console.log(`📁 Monitorando diretório: ${srcPath}`);

// Estrutura para armazenar informações dos arquivos
interface FileInfo {
  mtime: Date;
  size: number;
}

// Mapa para armazenar última modificação de cada arquivo
let fileCache: Map<string, FileInfo> = new Map();

// Função para encontrar todos os arquivos TypeScript recursivamente
function findTypescriptFiles(directory: string): string[] {
  let results: string[] = [];
  
  const items = fs.readdirSync(directory, { withFileTypes: true });
  
  for (const item of items) {
    const fullPath = path.join(directory, item.name);
    
    if (item.isDirectory()) {
      // Recursivamente procurar em subdiretórios
      results = results.concat(findTypescriptFiles(fullPath));
    } else if (item.isFile() && item.name.endsWith('.ts')) {
      // Adicionar arquivos .ts
      results.push(fullPath);
    }
  }
  
  return results;
}

// Função para compilar e executar um arquivo
function compileAndRun(filePath: string): void {
  try {
    console.log(`\n🔨 Compilando: ${filePath}`);
    
    // Calcular caminhos
    const relativePath = path.relative(srcPath, filePath);
    const outputDir = path.join('./dist', path.dirname(relativePath));
    
    // Garantir que o diretório de saída existe
    fs.mkdirSync(outputDir, { recursive: true });
    
    // Compilar o arquivo TypeScript
    execSync(`npx tsc ${filePath} --outDir ${outputDir}`, { stdio: 'inherit' });
    
    // Caminho do arquivo JS gerado
    const jsFile = path.join(outputDir, `${path.basename(filePath, '.ts')}.js`);
    
    if (fs.existsSync(jsFile)) {
      //clear console
      console.clear();

      console.log(`✅ Arquivo compilado: ${jsFile}`);
      console.log(`🚀 Executando: ${jsFile}`);
      
      const nodeProcess = spawn('node', [jsFile], { stdio: 'inherit' });
      
      nodeProcess.on('close', (code: number) => {
        // console.log(`🏁 Processo finalizado com código: ${code}`);
      });
    } else {
      console.error(`❌ Compilação falhou: arquivo ${jsFile} não foi gerado`);
    }
  } catch (error) {
    console.error('❌ Erro durante compilação/execução:', error);
  }
}

// Função para verificar alterações nos arquivos
function checkForChanges(): void {
  try {
    // Encontrar todos os arquivos TypeScript no diretório src
    const files = findTypescriptFiles(srcPath);
    
    if (files.length === 0) {
      console.log('⚠️ Nenhum arquivo TypeScript encontrado em src/');
      return;
    }
    
    // Primeira execução, apenas construir o cache
    if (fileCache.size === 0) {
      console.log(`📋 Arquivos TypeScript encontrados: ${files.length}`);
      
      for (const file of files) {
        try {
          const stats = fs.statSync(file);
          fileCache.set(file, {
            mtime: stats.mtime,
            size: stats.size
          });
          console.log(`  - ${file}`);
        } catch (err) {
          console.error(`❌ Erro ao obter informações do arquivo ${file}:`, err);
        }
      }
      
      console.log('\n⏳ Monitoramento iniciado. Modifique um arquivo para acioná-lo...');
      return;
    }
    
    // Verificar cada arquivo por alterações
    for (const file of files) {
      try {
        const stats = fs.statSync(file);
        const cached = fileCache.get(file);
        
        // Se é um arquivo novo ou foi modificado
        if (!cached || 
            stats.mtime.getTime() > cached.mtime.getTime() || 
            stats.size !== cached.size) {
          
          console.log(`🔄 Arquivo alterado: ${file}`);
          
          // Atualizar o cache
          fileCache.set(file, {
            mtime: stats.mtime,
            size: stats.size
          });
          
          // Compilar e executar o arquivo
          compileAndRun(file);
        }
      } catch (err) {
        console.error(`❌ Erro ao verificar arquivo ${file}:`, err);
      }
    }
    
    // Verificar arquivos removidos
    for (const [file] of fileCache) {
      if (!files.includes(file)) {
        console.log(`🗑️ Arquivo removido: ${file}`);
        fileCache.delete(file);
      }
    }
  } catch (error) {
    console.error('❌ Erro ao verificar arquivos:', error);
  }
}

// Iniciar o cache de arquivos e o processo de monitoramento
checkForChanges();

// Configurar intervalo para verificar alterações (a cada 1 segundo)
const pollInterval = setInterval(checkForChanges, 1000);

// Tratar encerramento do script
process.on('SIGINT', () => {
  console.log('\n👋 Encerrando monitor...');
  clearInterval(pollInterval);
  console.log('✅ Monitor encerrado com sucesso');
  process.exit(0);
});