const quizData = [
  {
    question: "What is a Buffer in Node.js?",
    options: [
      "A temporary storage space for text data",
      "A temporary storage space for binary data",
      "A method for handling asynchronous operations",
      "A function for managing file uploads",
    ],
    correct: [1],
    explanation:
      "A Buffer is a temporary storage space specifically designed to handle raw binary data directly in memory.",
  },
  {
    question: "Which of the following is true about Node.js Buffers?",
    options: [
      "Buffers are mutable in size after creation",
      "Buffers are used to handle raw binary data efficiently",
      "Buffers are only used for string data",
      "Buffers can only be used in synchronous operations",
    ],
    correct: [1],
    explanation:
      "Buffers are designed to handle raw binary data efficiently in memory, particularly for I/O operations.",
  },
  {
    question:
      "Which of the following is NOT a typical use case for Buffers in Node.js?",
    options: [
      "Reading and writing binary files",
      "Handling network operations like TCP and HTTP",
      "Manipulating text data in files",
      "Handling binary data in streams",
    ],
    correct: [2],
    explanation:
      "Buffers are designed for working with binary data, not text. For text manipulation, you would typically use strings.",
  },
  {
    question: "What is the size characteristic of a Buffer in Node.js?",
    options: [
      "Buffers can dynamically change their size",
      "Buffers have a fixed size after creation",
      "Buffers grow in size based on the data",
      "Buffers are not size-limited",
    ],
    correct: [1],
    explanation:
      "Buffers in Node.js have a fixed size, meaning their length cannot be altered once they are created.",
  },
  {
    question: "How can you create a Buffer from a string in Node.js?",
    options: [
      "Buffer.from('string')",
      "Buffer.create('string')",
      "new Buffer('string')",
      "Buffer.string('string')",
    ],
    correct: [0],
    explanation:
      "You can create a Buffer from a string using the `Buffer.from()` method.",
  },
  {
    question:
      "Which of the following operations can you perform on a Node.js Buffer?",
    options: [
      "You can only write data to a buffer",
      "You can write to and read from a buffer",
      "You can only read data from a buffer",
      "You can delete data in a buffer",
    ],
    correct: [1],
    explanation:
      "Buffers allow both writing data to and reading data from them, making them versatile for working with binary data.",
  },
  {
    question:
      "Why are Buffers more efficient than converting binary data to text in Node.js?",
    options: [
      "They require less CPU power",
      "They use more memory for storage",
      "They avoid the overhead of text conversion",
      "They automatically compress data",
    ],
    correct: [2],
    explanation:
      "Buffers allow direct manipulation of raw binary data, which avoids the overhead of converting data between binary and text formats.",
  },
  {
    question:
      "Which of the following is a common use case for Buffers in Node.js?",
    options: [
      "Handling text-based user input",
      "Reading and writing image files",
      "Managing user sessions",
      "Handling HTTP requests in JSON format",
    ],
    correct: [1],
    explanation:
      "Buffers are frequently used for reading and writing binary files, such as images or audio, which are stored in raw binary format.",
  },
  {
    question: "Which class is used to create Buffers in Node.js?",
    options: ["Buffer", "BufferStorage", "BinaryData", "ByteBuffer"],
    correct: [0],
    explanation:
      "Node.js uses the `Buffer` class to create and manipulate Buffers for handling raw binary data.",
  },
  {
    question: "How can you create an uninitialized Buffer in Node.js?",
    options: [
      "Buffer.alloc()",
      "Buffer.allocUnsafe()",
      "Buffer.create()",
      "Buffer.init()",
    ],
    correct: [1],
    explanation:
      "You can create an uninitialized Buffer using the `Buffer.allocUnsafe()` method. However, uninitialized Buffers are riskier because they may contain old, sensitive data.",
  },
];

/*


Node JS Buffers

- are an essential concept in NodeJS, especially when working with binary data streams
such as files, network protocols or image processing

What is a buffer?

- it is a temporary storage space for binary data. In NodeJS it is a special type
of object that allows us to work with raw binary data directly into memory.
Buffers are particularly useful when dealing with I/O operations such as reading from
or writing to a file or communicating over a network.

Key Characteristics of Buffers

- fixed size (buffers have a fixed size so their length cannot be altered once they are 
created)
- binary data (they are designed to handle raw binary data)
- efficient memory usage (buffers provide a way to manage memory efficiently, allowing for 
the manipulation of binary data without the overhead of converting it to and from text)

Use cases

- file operations (reading and writing binary files such as images or audio)
- network operations (sending and receiving data over TCP or HTTP)
- data streaming (handling data from streams such as file streams, network streams,
process streams)

In order to create a buffer we use the BUffer class. We can create a buffer from a 
string, we can create an initialized buffer or an uninitialized one, we can write to and
read from a buffer.

Buffers are a powerful feature in NodeJS, enabling efficient manipulation of raw binary data

*/
