var EventEmitter=require('events').EventEmitter;
var event=new EventEmitter();
event.on('somevent',function(){
    console.log('somevent事件触发')
});

setTimeout(function(){
 event.emit('somevent')
},2000)