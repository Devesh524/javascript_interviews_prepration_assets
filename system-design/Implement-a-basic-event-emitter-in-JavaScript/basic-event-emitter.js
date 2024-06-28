const basicEventEmitter = () => {
  const events = {};

  const on = (eventName, callback) => {
    if (!events[eventName]) {
      events[eventName] = [];
    }
    events[eventName].push(callback);
  };

  const emit = (eventName, ...args) => {
    if (events[eventName]) {
      events[eventName].forEach((callback) => {
        callback(...args);
      });
    }
  };

  return {
    on,
    emit,
  };
};

const emitter = basicEventEmitter();

emitter.on('click', (data) => {
  console.log('clicked', data);
});

emitter.emit('click', 'data'); // clicked data
