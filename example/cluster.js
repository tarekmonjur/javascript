const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  console.log(`Master process ${process.pid} is running`);

  // Fork workers
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker process ${worker.process.pid} died`);
    console.log('Forking a new worker...');
    cluster.fork();
  });
} else {
  // Worker process
  console.log(`Worker process ${process.pid} started`);

  // Create an HTTP server
  http.createServer((req, res) => {
    res.writeHead(200);
    console.log(process.pid);
    res.end('Hello, world!');
  }).listen(3000);

  console.log(`Worker process ${process.pid} listening on port 3000`);
}