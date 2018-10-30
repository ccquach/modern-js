class eventObserver {
  constructor() {
    this.observers = [];
  }

  subscribe(fn) {
    this.observers.push(fn);
    console.log(`You are now subscribed to ${fn.name}`);
  }

  unsubscribe(fn) {
    this.observers = this.observers.filter(item => item !== fn);
    console.log(`You are now unsubscribed from ${fn.name}`);
  }

  fire() {
    this.observers.forEach(fn => fn.call());
  }
}

const click = new eventObserver();

// Milliseconds subscription events
document.querySelector('.sub-ms').addEventListener('click', function() {
  click.subscribe(getCurrMilliseconds);
});

document.querySelector('.unsub-ms').addEventListener('click', function() {
  click.unsubscribe(getCurrMilliseconds);
});

// Seconds subscription events
document.querySelector('.sub-s').addEventListener('click', function() {
  click.subscribe(getCurrSeconds);
});

document.querySelector('.unsub-s').addEventListener('click', function() {
  click.unsubscribe(getCurrSeconds);
});

// Fire events
document.querySelector('.fire').addEventListener('click', function() {
  click.fire();
});

// Subscription events
const getCurrMilliseconds = function() {
  console.log(`Current milliseconds: ${new Date().getMilliseconds()}`);
};

const getCurrSeconds = function() {
  console.log(`Current Seconds: ${new Date().getSeconds()}`);
};
