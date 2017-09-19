var events=require('events');
var ememit=new events.EventEmitter();
ememit.on('some',function(arg1,arg2){
    console.log('listen',arg1,arg2)
});
ememit.on('some',function(arg1,arg2){
    console.log('listen',arg1,arg2)
})
ememit.emit('some','杨豪','jack')