const quizData = [
  {
    question: "What is the primary purpose of Node.js Streams?",
    options: [
      "To handle real-time database operations",
      "To process large amounts of data efficiently without loading it all into memory",
      "To store data in memory for faster retrieval",
      "To execute asynchronous tasks in parallel",
    ],
    correct: [1],
    explanation:
      "Node.js Streams allow efficient data handling by processing data in chunks instead of loading the entire content into memory.",
  },
  {
    question: "Which Node.js module provides the Stream API?",
    options: ["node:buffer", "node:fs", "node:stream", "node:events"],
    correct: [2],
    explanation:
      "The node:stream module provides the API for working with streams in Node.js.",
  },
  {
    question: "Which of the following is NOT a type of stream in Node.js?",
    options: ["Readable", "Writable", "Bi-directional", "Transform"],
    correct: [2],
    explanation:
      "Node.js streams include Readable, Writable, Duplex, and Transform. There is no 'Bi-directional' stream type.",
  },
  {
    question: "What is a key advantage of using streams?",
    options: [
      "They allow processing data in chunks instead of loading everything into memory",
      "They speed up JavaScript execution",
      "They eliminate the need for asynchronous programming",
      "They store data permanently",
    ],
    correct: [0],
    explanation:
      "Streams improve efficiency by processing data incrementally, reducing memory consumption.",
  },
  {
    question: "Which type of stream allows both reading and writing?",
    options: ["Readable", "Writable", "Duplex", "Transform"],
    correct: [2],
    explanation:
      "Duplex streams allow both reading and writing, such as network sockets.",
  },
  {
    question: "What is the main function of a Transform stream?",
    options: [
      "To modify data while it is being written and read",
      "To only write data without reading it",
      "To only read data without writing it",
      "To store data temporarily",
    ],
    correct: [0],
    explanation:
      "Transform streams can modify data as it is being read or written, such as compression and encryption.",
  },
  {
    question: "Which of the following is an example of a Writable stream?",
    options: [
      "fs.createReadStream()",
      "fs.createWriteStream()",
      "process.stdin",
      "http.createServer()",
    ],
    correct: [1],
    explanation:
      "fs.createWriteStream() is an example of a Writable stream used to write data to a file.",
  },
  {
    question: "Why are streams considered memory efficient?",
    options: [
      "They allow loading entire files into memory for fast access",
      "They process data incrementally instead of keeping everything in memory",
      "They use caching to store all data in RAM",
      "They increase CPU performance by storing temporary data",
    ],
    correct: [1],
    explanation:
      "Streams process data in small chunks, preventing excessive memory usage.",
  },
  {
    question: "Which of the following correctly describes a Readable stream?",
    options: [
      "It allows writing data to a file",
      "It allows reading data from a source such as a file or HTTP response",
      "It modifies data while being processed",
      "It enables communication between multiple streams",
    ],
    correct: [1],
    explanation:
      "Readable streams are used to read data from a source, such as a file or HTTP response.",
  },
  {
    question: "What is a key performance benefit of using streams?",
    options: [
      "They allow continuous data flow without waiting for the full file to load",
      "They reduce the need for database indexing",
      "They eliminate the need for caching mechanisms",
      "They improve synchronous execution speed",
    ],
    correct: [0],
    explanation:
      "Streams improve performance by processing data as soon as it is available, without waiting for the full file to load.",
  },
];

/*


Node JS Streams

- are a key part of handling I/O operations efficiently
- they are provided by the node:stream module
-can be readable, writable or both
-they allow us to read chunks of data in memory (so we don't need to
keep all the processed content in memory all the time)

Advantages of streams:

-time efficient (we don't have to wait until the entire file has been transmitted
to work with it, we can start processing data as soon as we have it)

-memory efficient (we don't have to load a huge amount of data into memory before
we process it)

The are 4 types of streams:

1. writable - we write data to these streams e.g. fs.createWriteStream()
2. readable - we read data from these streams e.g. fs.createReadableStream()
3. dupelx (streams that are both writable and readable)
4. transforms - streams that can modify the data as it is written and read


Streams benefits:

- efficiency (handles large data sets efficiently by processing in chunks)
- memory usage (readuces memory consumption as data is processed incrementally 
rather than loaded in memory all at once)
-performance (improves performance by allowing continuous data flow and processing)

NodeJS streams are a versatile and powerful tool for managing data flows and 
I/O operations efficiently. By leveraging different types of streams developers can
manage and handle large volumes of data efficiently, ensuring optimal performance and 
memory usage in their applications

*/
