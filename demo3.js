var events=require('events');
var eventEmitter=new events.eventEmitter();
eventEmitter.on('eventName',eventHandler);
eventEmitter.emit('eventName')