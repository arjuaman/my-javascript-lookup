onload = () => {
  if(window.Worker) {
      const myWorker = new Worker('worker.js');
      myWorker.postMessage(['Ankush', 'Training!']);
      console.log('From Main script, data sent to worker');

      myWorker.onmessage = (e) => {
          console.log("Worker said ", e.data);
      }
      myWorker.terminate();
  }
};