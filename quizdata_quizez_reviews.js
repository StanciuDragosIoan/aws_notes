const quizData = [
  {
    question: 'What is cloud computing?',
    options: [
      'Owning and maintaining physical servers',
      'On-demand delivery of IT resources over the internet with pay-as-you-go pricing',
      'A type of networking technology',
      'A physical data center for companies'
    ],
    correct: [1],
    explanation: 'Cloud computing provides IT resources on demand over the internet without needing to own physical infrastructure.'
  },
  {
    question: 'Which of the following is NOT a benefit of cloud computing?',
    options: [
      'Agility',
      'Elasticity',
      'Higher fixed costs',
      'Deploying globally in minutes'
    ],
    correct: [2],
    explanation: 'Cloud computing reduces fixed costs by using a pay-as-you-go model instead of upfront investments in infrastructure.'
  },
  {
    question: 'What is a key feature of Infrastructure as a Service (IaaS)?',
    options: [
      'Provides access to networking, computing, and storage resources',
      'Manages the underlying infrastructure including hardware and OS',
      'Delivers a fully managed software application',
      'Requires users to maintain their own servers'
    ],
    correct: [0],
    explanation: 'IaaS provides basic building blocks like networking, computing, and storage without managing the underlying infrastructure.'
  },
  {
    question: 'Which cloud computing model provides a fully managed product to users?',
    options: [
      'IaaS',
      'PaaS',
      'SaaS',
      'DaaS'
    ],
    correct: [2],
    explanation: 'Software as a Service (SaaS) provides a complete product managed by a service provider, such as web-based email.'
  },
  {
    question: 'Which cloud computing model allows developers to focus on applications while the provider manages hardware and OS?',
    options: [
      'IaaS',
      'PaaS',
      'SaaS',
      'BaaS'
    ],
    correct: [1],
    explanation: 'Platform as a Service (PaaS) handles infrastructure, OS, and software maintenance so developers can focus on their applications.'
  },
  {
    question: 'What is the primary benefit of elasticity in cloud computing?',
    options: [
      'Enables expansion to new geographic regions',
      'Allows scaling up or down based on demand without over-provisioning',
      'Ensures high security and compliance',
      'Improves AI and machine learning performance'
    ],
    correct: [1],
    explanation: 'Elasticity allows provisioning only the necessary resources and scaling up or down as needed, optimizing cost and performance.'
  },
  {
    question: 'Which of the following services is an example of a managed cloud service?',
    options: [
      'A physical data center managed by the user',
      'A self-hosted website on personal servers',
      'AWS automatically managing an AI/ML service',
      'A virtual private server with full manual control'
    ],
    correct: [2],
    explanation: 'AWS-managed services handle infrastructure, monitoring, and maintenance, reducing operational overhead for users.'
  },
  {
    question: 'What does the AWS global infrastructure consist of?',
    options: [
      'Data centers owned by third-party providers',
      'Virtual servers spread across a single geographic region',
      'Availability zones within multiple geographic regions',
      'Only U.S.-based infrastructure for security reasons'
    ],
    correct: [2],
    explanation: 'AWS has availability zones within multiple regions worldwide to ensure redundancy, security, and low latency.'
  },
  {
    question: 'Which of these is NOT an example of an AWS cloud service?',
    options: [
      'Resizable compute capacity',
      'Database and storage solutions',
      'AI/ML services',
      'On-premise server hosting'
    ],
    correct: [3],
    explanation: 'AWS does not provide on-premise server hosting, as it focuses on cloud-based, on-demand services.'
  },
  {
    question: 'How does AWS enable global deployment of applications?',
    options: [
      'By offering fixed-location data centers',
      'By allowing developers to deploy resources globally within minutes',
      'By requiring physical infrastructure ownership',
      'By restricting deployment to one region per account'
    ],
    correct: [1],
    explanation: 'AWS’s global infrastructure allows users to deploy applications in multiple regions quickly, reducing latency and improving availability.'
  }
];

/*

What is AWS? 

What is CLoud Computing? 

-on demand delivery of IT resources over the internet with pay as you go pricing 
-instead of buying owning or maintaining physical infrastructure,  you can access technology 
 services like computing power, storage and DBs on an as-needed basis from providers like AWS

Who uses cloud computing?
-many organizations of various sizes use it for data backup, disaster recovery,
email, virtual desktops, development and testing

Benefits of Cloud Computing:

Agility (easy access to broad range of technology so we can innovate faster - spin up and deploy 
resources easy or decomission them if needed)

Elasticity (no need to over provision resources up front, instead we can provision only what we need and 
scale up or down as required)

Cost savings (trade fixed expenses e.g. data centers/servers for variable expenses, pay onlywhay ou 
consume - economies of scale)

Deploy Globally (we can expand to new geographic regions and deploy globally in minutes (putting
apps closer to users reduces latency)

Types of Cloud Computing

Infrastructure as a service (IaaS - contains the basic building blocks. It provides access to networking features,
computers - virtual or on dedicated hardware- and data storage space)

Platform s a Service - PaaS (it manages the underlying infrastructure - hardware and OS, software maintenance,
patching, etc)

Software as a Service (SaaS)

provides a complete product              (ran and managed by a service provider) e.g. web based email


What are Cloud Services?

resources managed by AWS and delivered on demand over the internet

What are Cloud Managed Services

services whose underlying infrastructure is managed by AWS - these services require hardware, OS, etc... managed by
AWS which monitors and maintains them


E.G. of services

Resizable compute capacity
DB and Storage
AI/ML
Networkign and Content Delivery

AWS GLobal infrastructure
spans 114 availability zones within 36 geographic regions serving 245 countries

Benefits:

security, availability, performance, scalability, flexibility, global footpoint (largest global infra)

*/