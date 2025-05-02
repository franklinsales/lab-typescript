import chokidar from 'chokidar';
import { spawn } from 'child_process';
import path from 'path';

let currentProcess: ReturnType<typeof spawn> | null = null;

const watcher = chokidar.watch('./src/**/*.ts', {
  ignored: /(^|[\/\\])\../,
  persistent: true
});

watcher.on('change', (filePath) => {
  console.clear();
  console.log(`🔄 Arquivo modificado: ${filePath}`);
  
  if (currentProcess) {
    currentProcess.kill();
  }

  currentProcess = spawn('npx', ['ts-node', filePath], {
    stdio: 'inherit'
  });
});
