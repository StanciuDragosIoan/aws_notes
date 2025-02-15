/*

my approach


class PubSub {
  events = [];
  subscribe(event, cb) {
    this.events.push({ event, cb, subscribed: true });
  }

  publish(event, message) {
    this.events.forEach((e) => {
      if (e.event === event && e.subscribed === true) {
        e.cb(message);
      }
    });
  }

  unsubscribe(event, callback) {
    const unSub = this.events.find((e) => e.event === event);
    if (unSub) {
      unSub.subscribed = false;
    }
  }
}

const pubsub = new PubSub();

const callback1 = (data) => console.log("Callback 1 received:", data);
const callback2 = (data) => console.log("Callback 2 received:", data);

pubsub.subscribe("event1", callback1);
pubsub.subscribe("event1", callback2);

pubsub.publish("event1", { message: "Hello World!" });
// // Output:
// // Callback 1 received: { message: "Hello World!" }
// // Callback 2 received: { message: "Hello World!" }

pubsub.unsubscribe("event1", callback1);

pubsub.publish("event1", { message: "Another Event" });
// Output:
// Callback 2 received: { message: "Another Event" } (Callback 1 should not be called)
*/

/*

sample 

class PubSub {
  constructor() {
    this.events = {}; // Store events as key-value pairs for O(1) lookup
  }

  subscribe(event, cb) {
    if (!this.events[event]) {
      this.events[event] = []; // Initialize array if event doesn't exist
    }
    this.events[event].push(cb);
  }

  publish(event, message) {
    if (this.events[event]) {
      this.events[event].forEach((cb) => cb(message)); // Call all registered callbacks
    }
  }

  unsubscribe(event, callback) {
    if (this.events[event]) {
      this.events[event] = this.events[event].filter(cb => cb !== callback);
      if (this.events[event].length === 0) {
        delete this.events[event]; // Cleanup if no more subscribers
      }
    }
  }
}

// Example Usage
const pubsub = new PubSub();

const callback1 = (data) => console.log("Callback 1 received:", data);
const callback2 = (data) => console.log("Callback 2 received:", data);

pubsub.subscribe("event1", callback1);
pubsub.subscribe("event1", callback2);

pubsub.publish("event1", { message: "Hello World!" });
// Output:
// Callback 1 received: { message: "Hello World!" }
// Callback 2 received: { message: "Hello World!" }

pubsub.unsubscribe("event1", callback1);

pubsub.publish("event1", { message: "Another Event" });
// Output:
// Callback 2 received: { message: "Another Event" } (Callback 1 should not be called)

*/
