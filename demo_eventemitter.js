//include the events module
var events = require('events');
//create an eventEmitter object which contains the properties and methods of the events module
var eventEmitter =  new events.EventEmitter();
//create an event handler
var myEventHandler = function () {
    console.log('Someone screamed!');
}
//assign the event handler to an event
eventEmitter.on('scream', myEventHandler);
//fire the 'scream' event
eventEmitter.emit('scream');