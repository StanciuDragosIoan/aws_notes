const quizData = [
  {
    question: 'What is the AWS Shared Responsibility Model?',
    options: [
      'A model where AWS is responsible for all security aspects',
      'A model that splits security and compliance responsibilities between AWS and the customer',
      'A model where customers handle all security and AWS only provides infrastructure',
      'A model where security is only relevant for certain AWS services'
    ],
    correct: [1],
    explanation: 'AWS and the customer share security responsibilities; AWS secures the cloud infrastructure, while customers secure their data and configurations.'
  },
  {
    question: 'What is AWS responsible for in the Shared Responsibility Model?',
    options: [
      'Managing guest operating systems and customer applications',
      'Protecting infrastructure, hardware, networking, and physical security',
      'Configuring security groups and patching customer software',
      'Defining compliance policies for customer environments'
    ],
    correct: [1],
    explanation: 'AWS is responsible for securing the cloud infrastructure, including hardware, software, networking, and physical facilities.'
  },
  {
    question: 'What is the customer responsible for in the Shared Responsibility Model?',
    options: [
      'Managing the security of the cloud infrastructure',
      'Protecting the guest OS, applications, and configuring security settings',
      'Patching the AWS physical servers',
      'Providing security for all AWS customers'
    ],
    correct: [1],
    explanation: 'Customers are responsible for managing the security of their own applications, data, guest OS, and network configurations.'
  },
  {
    question: 'Which AWS service requires the customer to handle most security configurations?',
    options: [
      'Amazon S3',
      'Amazon DynamoDB',
      'Amazon EC2',
      'AWS Lambda'
    ],
    correct: [2],
    explanation: 'EC2 is an IaaS service, meaning the customer must secure the guest OS, updates, patches, and security group settings.'
  },
  {
    question: 'How does security responsibility change for managed services like S3 and DynamoDB?',
    options: [
      'AWS manages the infrastructure, OS, and platform while customers manage data classification, encryption, and permissions',
      'Customers manage everything, including the OS and hardware',
      'AWS provides no security features for managed services',
      'Customers only need to worry about IAM roles'
    ],
    correct: [0],
    explanation: 'For managed services like S3 and DynamoDB, AWS handles the infrastructure while customers manage data security and access controls.'
  },
  {
    question: 'Which of the following is an example of an inherited control in the Shared Responsibility Model?',
    options: [
      'Patch management',
      'Physical and environmental controls',
      'Configuration management',
      'Service and communication protection'
    ],
    correct: [1],
    explanation: 'Inherited controls are fully managed by AWS, such as physical and environmental security of data centers.'
  },
  {
    question: 'Which of the following is a shared control between AWS and the customer?',
    options: [
      'Physical security of data centers',
      'Application security updates',
      'Patch management',
      'Customer IAM configurations'
    ],
    correct: [2],
    explanation: 'AWS patches and fixes the infrastructure, while customers are responsible for patching the guest OS and applications.'
  },
  {
    question: 'Which of these is a customer-specific control in the Shared Responsibility Model?',
    options: [
      'Infrastructure patch management',
      'Data center physical security',
      'Service and communication protection',
      'Hardware maintenance'
    ],
    correct: [2],
    explanation: 'Customers must manage service and communication protection, ensuring data is routed within specific security environments.'
  },
  {
    question: 'Which security frameworks can customers use to determine compliance requirements?',
    options: [
      'AWS Security Model',
      'ISO and NIST Cybersecurity Framework',
      'AWS EC2 Compliance Guide',
      'Shared Responsibility Checklist'
    ],
    correct: [1],
    explanation: 'Customers can use established security standards like ISO and NIST to define compliance requirements for their AWS environment.'
  },
  {
    question: 'What is a best practice for applying the Shared Responsibility Model?',
    options: [
      'Rely only on AWS for security',
      'Regularly review the security and configuration of AWS services used',
      'Use only default security settings provided by AWS',
      'Disable security features to reduce complexity'
    ],
    correct: [1],
    explanation: 'Customers should regularly review security configurations and best practices to ensure their AWS environment remains secure.'
  }
];


/*

AWS SHared Responsability Model

Security and complicance ar a shared responsability between AWS and the customer
This model alleviates the customer's operational burden as AWS manages the components from the host OS 
and virtualization layer to the physical security of facilities. The customer assumes responsability for 
the guest OS (including updates and security patches) as well as the configuration of AWS provided security
group firewall

The customer should carefully consider what services they use, their integration and possible implications
(e.g. laws and regulations)
The different types of responsability are referred to as: Security of the Cloud (AWS responsability) and
Security in the Cloud (client responsability)

Security of the cloud

AWS is responsible for protecting the infrastructure that rus their services (hardware, software, networking and 
facilities)

Security in the Cloud

The customer is responsable for this. His responsability is determined by the services he uses (this also determines
the amount of configuration work customer must perform)

For example the Amazon Elastic Compute Cloud - EC2 is categorised as IaaS (Infrastructure as a Service) and requries the 
customer to perform all the security configuration. When deploying an EC2 instance, the customer is responsible for the guest
OS (security, updates and patches), for any software running on that OS and for the configuration of the AWS provided
firewall (called a security group) on each instance.

For abstracted services like S3 or Dynamo, AWS operates the infrastructure, the OS and platforms, customers access endpoints
to store/retrieve data and are responsible for managing their data (including encryption options), classifying their assets
and using IAM tools to apply permissions.

This shared responsability model also applies to Controls

Inherited controls (customer inherits them fully from AWS)

-physical and environmental controls

Shared controls (AWS provides the infrastructure and the customer provides their own control implementation)


Patch management (AWS is responsible for patching and fixing the infrastructure, while customer patches/fixes the guest OS
and apps)

Configuration Management (AWS configures the infrastructure but the customer is responsible for configuring their own 
guest OS, DB and apps)

Awareness and training (AWS trains its employees while customer his own)


Customer Specific Controls (only the resp of customer):

Service and Communication protection or Zone security (customer must route or zone data within specific security enviroments)


Applying the Shared Responsibility Model

- customer responsibility depends on the service they use, regions they choose. on their own IT environment and specific laws

- customer should determine external and internal security and compliance requirements (using standards like ISO or NIST Cyber 
Security Framework - NOST = National Institute of Standard and Technology)

-employing the AWS cloud adoption framework - CAF or the Well Architected best practices

-customer should review the security and configuration of AWS services
*/