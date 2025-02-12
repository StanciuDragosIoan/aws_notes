const quizData = [
  {
    question: "What is the primary purpose of using Clusters in Node.js?",
    options: [
      "To run JavaScript in the browser",
      "To create multiple instances of an application to distribute load across CPU cores",
      "To execute only synchronous code",
      "To manage front-end rendering",
    ],
    correct: [1],
    explanation:
      "Clusters allow Node.js applications to utilize multiple CPU cores by running multiple instances of the application, distributing incoming requests efficiently.",
  },
  {
    question: "How does the Cluster module achieve load balancing?",
    options: [
      "By using a built-in manager process that routes requests to worker processes",
      "By creating multiple worker threads within a single process",
      "By offloading tasks to the file system",
      "By preventing concurrent execution of tasks",
    ],
    correct: [0],
    explanation:
      "The Cluster module uses a master process to manage and distribute requests to worker processes, ensuring efficient load balancing.",
  },
  {
    question: "What happens if a worker process crashes in a Cluster?",
    options: [
      "The cluster module automatically restarts the worker",
      "The entire application shuts down",
      "All worker processes stop running",
      "The crashed worker process is ignored",
    ],
    correct: [0],
    explanation:
      "Clusters provide fault tolerance by automatically restarting worker processes if they crash, helping to maintain application stability.",
  },
  {
    question: "Which of the following best describes a Worker in Node.js?",
    options: [
      "A background process that runs separately from the application",
      "A single-threaded function that blocks execution",
      "An independent thread that runs concurrently with the main process",
      "A replacement for asynchronous programming",
    ],
    correct: [2],
    explanation:
      "Workers in Node.js are independent threads that execute concurrently, making them useful for handling CPU-intensive tasks.",
  },
  {
    question: "What is a key difference between Clusters and Worker Threads?",
    options: [
      "Clusters create multiple processes, while Worker Threads run within a single process",
      "Worker Threads are used for network requests, while Clusters handle computations",
      "Clusters are only useful for debugging, while Worker Threads optimize performance",
      "Worker Threads are managed automatically by the OS, while Clusters require manual setup",
    ],
    correct: [0],
    explanation:
      "Clusters spawn separate processes with their own memory, whereas Worker Threads run within the same process but execute in parallel.",
  },
  {
    question: "When should you use Clusters instead of Worker Threads?",
    options: [
      "When you need to distribute the load of a web server across multiple CPU cores",
      "When running short-lived background tasks",
      "When handling simple asynchronous I/O operations",
      "When working with frontend frameworks like React",
    ],
    correct: [0],
    explanation:
      "Clusters are ideal when distributing HTTP server load across multiple CPU cores, ensuring better scalability.",
  },
  {
    question: "Which use case is best suited for Worker Threads?",
    options: [
      "Running CPU-intensive computations in parallel",
      "Handling HTTP requests in a web server",
      "Optimizing synchronous database queries",
      "Managing network load balancing",
    ],
    correct: [0],
    explanation:
      "Worker Threads are useful for performing CPU-intensive tasks in parallel, preventing the main thread from blocking.",
  },
  {
    question: "What is a limitation of Worker Threads compared to Clusters?",
    options: [
      "Worker Threads require manual request routing",
      "Worker Threads do not utilize multiple CPU cores effectively",
      "Worker Threads share memory, which can lead to synchronization issues",
      "Worker Threads cannot run concurrently",
    ],
    correct: [2],
    explanation:
      "Worker Threads share memory space, which can introduce synchronization challenges when handling concurrent tasks.",
  },
  {
    question: "How can Worker Threads be used within a Cluster?",
    options: [
      "They cannot be used together",
      "Worker Threads can be spawned within a clustered worker process to handle CPU-intensive tasks",
      "Clusters manage Worker Threads automatically",
      "Worker Threads replace the need for Clusters",
    ],
    correct: [1],
    explanation:
      "Worker Threads can be used inside a Cluster to handle computationally expensive tasks within individual worker processes.",
  },
  {
    question:
      "Which statement is true about Node.js Clusters and Worker Threads?",
    options: [
      "Clusters allow Node.js to scale across multiple CPU cores, while Worker Threads improve concurrency within a single process",
      "Clusters are always faster than Worker Threads",
      "Worker Threads are used only for debugging purposes",
      "Clusters automatically handle all parallel execution in a Node.js app",
    ],
    correct: [0],
    explanation:
      "Clusters help distribute the application across multiple CPU cores, whereas Worker Threads enable concurrent execution within a single process.",
  },
];

/*

Clusters vs WorkerThreads in NodeJS

NodeJS is a popular runtime environment for building server-side apps. One of its 
key strengths is its ability to handle async I/O operations. When it comes to scaling
NodeJS apps to leverage multiple CPU cores, 2 common concepts are discussed: clusters
and workers

Clusters

A cluster is a built-in Node module that allows us to create multiple instances of 
an application, so as to distribute the load across multiple CPU cores. it acts as a 
manager for the application instances. The primary purpose of using clusters is to take
advantage of modern multi-core processors and to ensure that the applications can handle
a higher volume of requests.

Cluster characteristics:

- manager role (acts as a manager process overseeing children processes called workers)

- load balancing (requests are routed by the manager process to the worker processes)

- fault tolerance (if one worker process crashes, the Cluster can automatically restart it)

Worker

- refers to threads (an instance of the application that runs independently and concurrently)
- independent execution (a worker is a separate instance of an app running its own process)
- concurrency (workers can ru in parralel, this is useful for CPU intensive tasks)
- scalability (we can create and manage multiple workers but we need custom ballancing and
communication between workers)

When to use:

Use clusters when wanting to take advantage of multi-core processors and distribute the load
across multiple worker processes

Use worker when needing to perform tasks concurrently, such as processing data in parallel or
handling long running computations. Workers can be used independently or within a cluster setup

*/
