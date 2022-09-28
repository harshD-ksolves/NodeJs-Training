const EventEmitter=require('events');

const emitter=new EventEmitter();


emitter.on('FirstEvent',(data)=>{
    console.log("First Listner:- "+data);
});
emitter.on('FirstEvent',(data)=>{
    console.log("Second Listener:- "+data);
});

emitter.once('SecondEvent',(data,status)=>{
    console.log(`Second Event: status : ${status} data:`+data);
});

emitter.on('SecondEvent',(data,status)=>{
    console.log(`Second Event: status : ${status} data:`+data);
});


emitter.emit('FirstEvent','First ');
emitter.emit('FirstEvent','second');

emitter.emit('SecondEvent','Third',200);
emitter.emit('SecondEvent','Four',100);

console.log(emitter.listenerCount('FirstEvent'));

console.log(emitter.eventNames());