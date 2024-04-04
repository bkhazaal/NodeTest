const { EventEmitter } = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('yuh', () => {

    console.log('yea')
});

eventEmitter.emit('yuh');
eventEmitter.emit('yuh');

