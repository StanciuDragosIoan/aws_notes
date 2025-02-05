const quizData = [
  {
    question: 'What is the primary purpose of the Node.js Event Loop?',
    options: [
      'To execute JavaScript synchronously',
      'To allow Node.js to perform non-blocking I/O operations',
      'To create multiple threads for JavaScript execution',
      'To replace the need for asynchronous programming'
    ],
    correct: [1],
    explanation: 'The Event Loop enables Node.js to perform non-blocking I/O operations by offloading tasks to the system kernel.'
  },
  {
    question: 'Which C library implements the Node.js Event Loop and asynchronous behaviors?',
    options: ['V8', 'Libuv', 'OpenSSL', 'Express'],
    correct: [1],
    explanation: 'Libuv is the C library that provides the event loop and asynchronous functionalities in Node.js.'
  },
  {
    question: 'What happens in the "poll" phase of the Event Loop?',
    options: [
      'Timers are executed',
      'Callbacks for system operations run',
      'Incoming connections and I/O events are processed',
      'Handles that were abruptly closed are cleaned up'
    ],
    correct: [2],
    explanation: 'The poll phase processes incoming connections and data, and executes callbacks when the queue is not empty.'
  },
  {
    question: 'Which phase is responsible for executing callbacks related to TCP errors like ECONNREFUSED?',
    options: ['Poll', 'Pending Callbacks', 'Check', 'Close Callbacks'],
    correct: [1],
    explanation: 'The "Pending Callbacks" phase is where callbacks for certain system operations, like TCP errors, are executed.'
  },
  {
    question: 'What does the "timers" phase in the Event Loop do?',
    options: [
      'Executes setTimeout and setInterval callbacks after their scheduled time',
      'Executes all asynchronous operations immediately',
      'Handles TCP connection errors',
      'Executes callbacks from closed handles'
    ],
    correct: [0],
    explanation: 'The "timers" phase executes setTimeout and setInterval callbacks when their threshold is reached.'
  },
  {
    question: 'What determines the execution order of callbacks within each event loop phase?',
    options: [
      'A Last-In-First-Out (LIFO) approach',
      'A First-In-First-Out (FIFO) queue',
      'Random execution order',
      'Node.js assigns priority to callbacks dynamically'
    ],
    correct: [1],
    explanation: 'Each phase in the event loop has a FIFO queue, meaning callbacks are executed in the order they were added.'
  },
  {
    question: 'Which event loop phase is responsible for executing "setImmediate" callbacks?',
    options: ['Poll', 'Check', 'Pending Callbacks', 'Timers'],
    correct: [1],
    explanation: 'The "Check" phase executes callbacks from setImmediate, ensuring they run immediately after the poll phase.'
  },
  {
    question: 'When is the "close callbacks" phase executed in the Event Loop?',
    options: [
      'After all asynchronous operations have finished',
      'When a handle like a socket is closed abruptly',
      'Before the event loop starts processing timers',
      'Whenever Node.js encounters an error'
    ],
    correct: [1],
    explanation: 'The "Close Callbacks" phase executes when a handle (e.g., a socket) is closed abruptly, triggering the "close" event.'
  },
  {
    question: 'Why can Node.js handle multiple operations efficiently even though it runs on a single thread?',
    options: [
      'It creates additional threads dynamically',
      'It uses Libuv to offload tasks to the system kernel',
      'It relies on JavaScript’s multi-threading capabilities',
      'It processes operations sequentially without blocking'
    ],
    correct: [1],
    explanation: 'Libuv allows Node.js to offload operations to the system kernel, which can handle multiple background tasks efficiently.'
  },
  {
    question: 'Which statement about the Event Loop is true?',
    options: [
      'It executes all queued callbacks in a single phase before moving to the next phase',
      'It stops execution when there are no pending I/O operations or timers',
      'It always executes timers exactly at the specified time',
      'It processes synchronous code before asynchronous code'
    ],
    correct: [1],
    explanation: 'The Event Loop continues running as long as there are pending I/O operations, timers, or callbacks to execute.'
  }
];



/*

NodeJS Event Loop

It is what allows NodeJS to perform non-blocking I/O operations despite the fact that 
a single JS thread is used by default - by offloading operations to the system kernel
whenever possible.

Since most modern kernels are multi-threaded, they can handle multiple operations executing 
in the background. When one of these operations completes, the kernel tells NodeJS so that 
the appropriate callback is added to the poll queue (or callback queue) to eventually be 
executed.

Libuv is the C library that implements the NodeJS event loop and all of the async behaviours of 
the platform.

The event loop phases

timers
pending callbacks
idle,prepare
poll (incoming connections/data, etc...)
check phase
close callbacks phase


Each phase has a FIFO queue of callbacks to execute. When the event loop enters a phase, it will perform
all operations specific to that phase, then execute callbacks in that phase's queue until it finishes (ur
until the maximum number of callbacks has been executed). Then it moves to the next phase.

Timers

- specify the threshold after which a provided callback may be executed rather than the exact time a person
wants it to be executed

Pending callbacks

-executes callbacks for some system operations such as types of TCP errors (e.g. ECONNREFUSED)

Poll

-this phase allows the event loop to execute callbacks after the poll phase ended


Close Callbacks

-if a handle is closed abruptly (e.g. socket.destroy()), the 'close' event will be emitted in this phase

*/