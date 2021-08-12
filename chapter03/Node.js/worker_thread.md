# worker_thread 모듈
노드에서 멀티 스레드 방식으로 작업을 worker_threads 모듈로 가능하다.

isMainThread를 통해 현재 코드가 메인 스레드에서 실행되는지, 아니면 생성한 워커 스레드에서 실행되는지 구분된다.

```
const {
  Worker, isMainThread, parentPort,
}= require('worker_threads');

if(isMainThread){ //부모일때
  const worker = new Worker(__filename);
  worker.on('message',message => console.log('from worker',message));
  worker.on('exit',() => console.log('worker exit'));
  worker.postMessage('ping');
}else{ //워커일때
  parentPort.on('message',(value) => {
    console.log('from parent',value);
    parentPort.postMessage('pong');
    parentPort.close();
  });
}
```

#### 1️⃣ 부모에서 워커 생성후 `worker.postMessage`로 워커에 데이터를 보낸다.
#### 2️⃣ 워커는 `parentPort.on('message')` 이벤트 리스너로 부모로부터 메세지를 받는다.
#### 3️⃣ `parentProt.postMessage`로 부모에게 메세지를 보낸다.
#### 4️⃣ 부모는 worker.on('message')로 메세지를 받는다.


```
const {
  Worker, isMainThread, parentPort, workerData,
} = require('worker_threads');

if(isMainThread){ //부모일때
   const threads = new Set();
   threads.add(new Worker(__filename,{
    workerData : {start :1}
   }));
   threads.add(new Worker(__filename,{
    workerData : {start :2}
   }));
   for(let worker of threads) {
     worker.on('message', message => console.log('from worker', message));
     worker.on('exit',() => {
       threads.delete(worker);
       if(threads.size === 0 ){
         console.log('job done');
       }
     });
   }
}else{ //워커일때
  const data = workerData;
  parentPort.postMessage(data.start + 100);
}
```
- new Worker를 호출할 때 두 번째 인수의 workerData 속성으로 원하는 데이터를 보낼 수 있다.
- 워커에서는 `workerData`로 부모로부터 데이터를 받는다.
- 현재 두 개의 워커가 돌아가고 있으며, 각각 부모로부터 숫자를 받아 100을 더해 돌려준다.
- 돌려주는 순간 워커가 종료되어 `worker.on('exit')`가 실행된다. 두개 모두 종료시 job done 로깅