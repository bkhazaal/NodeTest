const { EventEmitter } = require('events');
const eventEmitter = new EventEmitter();

function Counter() {
let counter = 1;
eventEmitter.on('test', () => {
    if (counter < 4) { 
            console.log(counter);
            counter++;
            eventEmitter.emit('test');

    }
});
}

Counter();
eventEmitter.emit('test');

module.exports = Counter;
