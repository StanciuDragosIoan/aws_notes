const quizData = [
  {
    question: "What is system design?",
    options: [
      "A process for defining the layout of web pages",
      "The process of designing the architecture, components, and interfaces of a system",
      "A technique for writing optimized code",
      "A database optimization strategy",
    ],
    correct: [1],
    explanation:
      "System design involves defining the structure, components, and interactions of a system to meet user requirements.",
  },
  {
    question: "What is the primary goal of the requirements gathering process?",
    options: [
      "To build the system immediately",
      "To analyze stakeholder needs and document them to ensure the system meets expectations",
      "To test the system's scalability",
      "To optimize the database schema",
    ],
    correct: [1],
    explanation:
      "Requirements gathering ensures that the final system aligns with stakeholder needs and expectations.",
  },
  {
    question:
      "Which of the following is an example of a functional requirement?",
    options: [
      "The system must support 10,000 concurrent users",
      "The system must process payments securely",
      "The system should be highly available",
      "The system must load in under 2 seconds",
    ],
    correct: [1],
    explanation:
      "Functional requirements define the behavior and operations of a system, such as processing payments.",
  },
  {
    question: "What is a load balancer used for?",
    options: [
      "Managing system monitoring",
      "Storing frequently accessed data",
      "Dividing requests or workloads across multiple resources or servers",
      "Encrypting database transactions",
    ],
    correct: [2],
    explanation:
      "A load balancer distributes incoming traffic among multiple servers to improve performance and reliability.",
  },
  {
    question:
      "Which caching strategy updates the cache and database simultaneously?",
    options: ["Cache-aside", "Write-through", "Write-behind", "Lazy loading"],
    correct: [1],
    explanation:
      "The write-through strategy updates both the cache and database at the same time to ensure consistency.",
  },
  {
    question: "What is the primary function of an API Gateway?",
    options: [
      "Handling authentication and monitoring",
      "Storing user requests",
      "Directly interacting with databases",
      "Encrypting API responses",
    ],
    correct: [0],
    explanation:
      "An API Gateway routes client requests, handles security, and manages traffic.",
  },
  {
    question:
      "Which type of database is best suited for storing frequently accessed key-value pairs?",
    options: [
      "Relational databases",
      "Document databases",
      "Key-value stores",
      "Graph databases",
    ],
    correct: [2],
    explanation:
      "Key-value stores are designed for fast retrieval of frequently accessed data.",
  },
  {
    question: "What is the purpose of rate limiting?",
    options: [
      "To speed up database transactions",
      "To ensure that an application does not get overwhelmed by too many requests",
      "To enforce authentication rules",
      "To optimize API responses",
    ],
    correct: [1],
    explanation:
      "Rate limiting restricts the number of requests a system can handle in a given time to prevent overload.",
  },
  {
    question:
      "Which of the following is NOT a characteristic of horizontal scaling?",
    options: [
      "Adding more servers to increase capacity",
      "Improving fault tolerance",
      "Changing the system’s architecture",
      "Upgrading the CPU of an existing server",
    ],
    correct: [3],
    explanation:
      "Upgrading a server's CPU is an example of vertical scaling, not horizontal scaling.",
  },
  {
    question:
      "Which architectural style tightly couples all application components in a single codebase?",
    options: [
      "Microservices",
      "Event-driven architecture",
      "Serverless architecture",
      "Monolith",
    ],
    correct: [3],
    explanation:
      "A monolithic architecture combines all components into a single codebase, making scaling and updates more challenging.",
  },
  {
    question: "What is an anti-pattern for microservices architecture?",
    options: [
      "Using separate databases for each microservice",
      "Creating too many microservices unnecessarily",
      "Using REST APIs for communication",
      "Defining clear boundaries for microservices",
    ],
    correct: [1],
    explanation:
      "Creating too many microservices can add unnecessary complexity to the system.",
  },
  {
    question: "In an event-driven architecture, how do services communicate?",
    options: [
      "Through a centralized database",
      "By making direct function calls",
      "By sending and reacting to events",
      "Using a shared memory space",
    ],
    correct: [2],
    explanation:
      "Event-driven architectures allow services to communicate by reacting to events instead of direct function calls.",
  },
  {
    question:
      "Which of the following is NOT a challenge of event-driven architecture?",
    options: [
      "Event latency",
      "Difficulty debugging and tracing events",
      "High security risks",
      "Event order and consistency issues",
    ],
    correct: [2],
    explanation:
      "Security is a concern in all architectures but is not a specific challenge unique to event-driven systems.",
  },
  {
    question: "What is a key characteristic of serverless architecture?",
    options: [
      "Developers manually manage the underlying infrastructure",
      "Applications scale automatically based on demand",
      "Applications are hosted entirely on on-premise servers",
      "Developers must write complex server configurations",
    ],
    correct: [1],
    explanation:
      "Serverless architecture automatically scales based on demand, freeing developers from managing infrastructure.",
  },
  {
    question:
      "What is the main downside of a cold start in serverless computing?",
    options: [
      "Increased function execution time",
      "Higher cloud provider costs",
      "Security vulnerabilities",
      "Data loss during execution",
    ],
    correct: [0],
    explanation:
      "Cold starts cause latency when a new serverless function instance is initialized.",
  },
  {
    question:
      "Which of the following is a common strategy to optimize serverless performance?",
    options: [
      "Using large function packages",
      "Keeping database connections persistent",
      "Increasing request rate limits",
      "Running functions on dedicated servers",
    ],
    correct: [1],
    explanation:
      "Maintaining persistent database connections helps reduce connection overhead in serverless functions.",
  },
  {
    question: "What is the difference between latency and throughput?",
    options: [
      "Latency measures system capacity, while throughput measures speed",
      "Latency is the time it takes for a request to be processed, while throughput is the number of requests handled per unit time",
      "Latency measures the number of failed requests, while throughput measures successful ones",
      "Latency and throughput are interchangeable terms",
    ],
    correct: [1],
    explanation:
      "Latency refers to the delay in processing a request, while throughput measures how many requests can be processed over time.",
  },
  {
    question:
      "Which component of system design ensures that tasks are executed at scheduled intervals?",
    options: [
      "Rate limiter",
      "Task scheduler",
      "Monitoring system",
      "Message queue",
    ],
    correct: [1],
    explanation:
      "A task scheduler is responsible for executing tasks at specified intervals or conditions.",
  },
  {
    question: "What is the main benefit of database sharding?",
    options: [
      "Reducing query complexity",
      "Partitioning a database to improve scalability and performance",
      "Encrypting database entries",
      "Avoiding the need for caching",
    ],
    correct: [1],
    explanation:
      "Database sharding partitions a database into smaller pieces to improve scalability and performance.",
  },
];
/*

System Design

System design is the process of designing the architecture, components and interfaces
of a system so that it meets the end-user requirements

As applications grow in complexity, designing them with scalability, performance and 
availability in mind becomes important

Requirements Gathering Process

-analyze the needs and expectations of stakeholders, and document them to ensure that 
the final system meets their requirements (e.g. identify stakeholders, define objectives
and scopes, document requirements, etc...)

Functional vs Non Functional requirements

Functional Requirements

- define the behaviour of a system
- define the functions of a system

Non Functional Requirements

- specify how the system performs its task, focuses on performance, scalability and usability


Extended Requirements

- they are 'nice to have's (e.g. record metrics and analytics)



Components of System Design

- this is where we look at a system's requirements and define its structure and components

Load Balancer

- divides requests or workloads across distinct resources or servers
- common types of LB: Application LB (used with specific types of apps or protocols like HTTP
or HTTPS)


Caching

- temporarily storing frequently accessed data for a quicker access to it
- temporary storage is faster (e.g. in memory instead of going back to the DB)
- usually caching sits in between client and DB layer (but there are multiple caching stragegies
 e.g. cache aside, write through - update cache + DB at same time - , write behind - update cache first
 and DB after)


CDN 

- network of servers spread across different regions that enables faster delivery of content


API Gateway

- controls requests traffick to a system
- routes requests (forwards the request to the appropriate services/services, compiles their 
answer and sends it back to the client)
- simplifies client interaction (without API Gateway, clients might need to connect directly 
to each service individually, the API gateway simplifies this by hiding the Back End details from
clients)
- Security and monitoring (API Gateway can handle security features like authentication or authorization,
it also monitors traffick)
- Load Management (in busy systems API Gateway can help balance and control the flow of requests to prevent
overload, ensuring smoother performance)



Key value Stores

- NoSQL database that is meant for storing data as key-value pairs
- fast and used for storing frequently accessed data
- handles data less complex than an RDBMS


Blob Storage and DBs

- blob storage stores large volumes of unstructured data (e.g. documents, photos, videos, audio)
- also known as object storage
- RDBMS and NoSQL DBs and in-memory databases are DBs (they store data that needs to be stored and accessed
in a structured way)


Rate Limiters

- they restrict the rate at which a system or application responds to requests
- this helps the system guard against receiving too many requests
- common rate limiters include:request rate limiter, user rate limiter, token
bucket rate limiter (allows a certain number of requests in each time period, and the excess is held in a 
'bucket' until the next time period)

Monitoring System

- a component that analyzes metrics and performance data for applications
- there are network monitoring systems, system monitoring systems (for computers, CPU, etc...),
application monitoring systems


Distributed System Messaging Queues

- a system that enables the exchange of messages between different nodes in a distributed system
- message queues allow nodes to communicate asynchronously, decoupling sender and receiver of message
- types of queues: point-to-point queues (messages are delivered to a specific recipient), publish-subscribe
(messages are published to a topic and are delivered to all subscribers), hybrid queues (combine the 2)


Task Scheduler

- system responsable for scheduling and executing tasks in a distributed system



System design lifecycle

- process that invloves planning, creating, testing and implementing a system
- phases include: planning, feasibility study, system design, implementation, testing, deployment, maintenance and support


Scalability

- the ability of a system to accomodate a growing load without compromising performance is referred to
as scalability
- scalability is achieved through: distributed architectures like cloud computing, code optimisation, hardware ehancements
- a system must be able to accomodate growing user traffkick, data volumes or computing demands
- we can scale a system up or down to accomodate changing needs, improve performance and keep costs lowered


Vertical scaling

- or scaling up refers to the process of increasing the capacity of an individual hardware or software
- does not change the architecture
- it is easier, simpler but more limited


Horizontal Scaling
- or scaling out is the process of increasing the capacity of a system by adding more servers to it
- it is more performant, fault tolerant and practically limitless
- it is more costly, more complex and changes the architecture of the system


Components used for scalability:

Load Balancer,
Caching,
Database Replication (copying data from 1 DB to another in real time)
DB Sharding (partitioning a DB into smaller, more manageable parts called shards, each holding a subset of data)
CDN (caches data on servers close to the end user)
Data Partitioning (splitting data into smaller more manageable parts based on certain criteria e.g. geo location), 
this data can be split between storage devices or DBs


Latency and Throughput

Latency = the time for data to travel (e.g. a server response)
e.g. network latency, system latency

Throughput = the rate at which a system can process requests (bytes per second, transactions per second, etc...)


Architectural Styles

Monolith

- traditional approach, all application components are in a single codebase
- unified structure, simplifies development and deployment
- tightly couples, harder to scale or change


Characteristics:

- single codebase
- tight coupling
- shared memory
- centralised DB
- limited scalability
- they risk downtime
- limited flexibility


Microservices Architecture:

- software apps are developed as a collection of small, independent services that communicate with each other
- microservices perform a specific function and each can be developed, deployed and scaled independently
- services interact via API
- they can be updated independently reducing risk during changes and enhancing system resilience

Anti patterns for microservices architecture

- using a single centralised DB (can compromise their independence and scalability)
- creating too many microservives can add unnecesary complexity to the system
- if the boundaries between microservices are not clearly defined, it can cause confusion about their responsability
- failing to address security issues in microservices can expose the system to vulnerabilities or data breaches

Event Driven Architecture

- with this approach, various systems communicate with one another by generating, identifying and reacting to
events 
- when an event takes place, a message is dispatches, prompting the relevant components to responde
- this structure enhances flexibility, scalability and real time responsiveness in systems

Characteristics of EDA (Event Driven Architecture)

- flexibility and responsiveness (systems can adjust to changing situations), the system may adapt to new information
dynamically by initiating operations based on events, guaranteeing agility and responsiveness

- scalability (components can be added or removed without affecting current configuration)

- real time processing (events are handled as they happen)

- decentralised communication (components communicate through events rather than direct connections)
- events are managed on a pub sub model

Challenges of EDA

- increased complexity (it can get hard to manage how events flow and to keep everything coordinated)
- event order and consistency (keeping events in the right order and making sure the system remains consitent 
can be tricky)
- debugging and tracing (finding and fixing issues in a distributed and async system can be harder)
- event latency (since events are processed individually, there can be delays between when an event coccurs and 
when it gets responded to)


Serverless Architecture

- cloud providers handle the underlying infrastructure, including: scaling, maintenance, provisioning

Serverless COmputing Providers and Platforms:

AWS LAmbda
Azure FUnctions
Google Cloug Functions

Scaling in Serverless:

- automatic scaling (based on usage)
- cold starts (when a new instance of a function is initialised, this can create latency)
- throttling (cloud providers often impose limits on the rate at which functions are invoked) 
-> throttling means delaying or rejecting excess requests (above the limit)

Performance Optimisation Stragegies:

- optimise function code (to be small and lean)
- manage dependencies (reduce the size of deployment packages)
- persistent connection (when integrating with a DB or other services, use persistent connection - keep the 
connection open accrss multiple invokations - this can reduce connection overhead)

*/
