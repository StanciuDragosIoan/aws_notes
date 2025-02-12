const quizData = [
  {
    question: "What is the primary goal of OWASP?",
    options: [
      "To promote the use of open-source software",
      "To improve web application security by providing free resources and best practices",
      "To develop proprietary security tools for enterprises",
      "To replace existing cybersecurity standards"
    ],
    correct: [1],
    explanation: "OWASP is a non-profit organization focused on improving web application security by providing free tools, resources, and best practices."
  },
  {
    question: "What is the OWASP Top 10?",
    options: [
      "A ranking of the most secure programming languages",
      "A list of the top 10 vulnerabilities found in open-source software",
      "A widely recognized list of the most critical security risks in web applications",
      "A set of proprietary security tools developed by OWASP"
    ],
    correct: [2],
    explanation: "The OWASP Top 10 is a widely recognized list of the most critical security risks to web applications, updated periodically."
  },
  {
    question: "Which of the following is an example of a security risk from the OWASP Top 10?",
    options: [
      "Weak database indexing",
      "Broken Access Control",
      "Slow application performance",
      "High server costs"
    ],
    correct: [1],
    explanation: "Broken Access Control is one of the OWASP Top 10 security risks, referring to improperly enforced access restrictions that allow unauthorized users to access sensitive data."
  },
  {
    question: "What is OWASP SAMM designed for?",
    options: [
      "Assessing and improving an organization's software security maturity",
      "Testing applications for vulnerabilities",
      "Providing encryption techniques for web applications",
      "Creating automated security audits"
    ],
    correct: [0],
    explanation: "OWASP SAMM (Software Assurance Maturity Model) is a framework for integrating security into software development through governance, design, implementation, and operations."
  },
  {
    question: "Which of the following aspects does OWASP ASVS cover?",
    options: [
      "Authentication, session management, access control, and input validation",
      "Only authentication mechanisms",
      "Code performance optimization",
      "Software licensing requirements"
    ],
    correct: [0],
    explanation: "OWASP ASVS (Application Security Verification Standard) provides a framework for verifying security aspects like authentication, session management, access control, input validation, logging, and monitoring."
  },
  {
    question: "What does the OWASP Dependency Check tool do?",
    options: [
      "Scans project dependencies for known vulnerabilities",
      "Monitors network traffic for malicious activity",
      "Detects memory leaks in Node.js applications",
      "Checks for performance bottlenecks in web applications"
    ],
    correct: [0],
    explanation: "OWASP Dependency Check scans project dependencies and compares them against the National Vulnerability Database (NVD) to identify known vulnerabilities."
  },
  {
    question: "Which OWASP tool helps developers find vulnerabilities in software dependencies?",
    options: [
      "OWASP SAMM",
      "OWASP Dependency Check",
      "OWASP ASVS",
      "OWASP Threat Model"
    ],
    correct: [1],
    explanation: "OWASP Dependency Check is a tool that analyzes software dependencies and identifies vulnerabilities by comparing them to the NVD."
  },
  {
    question: "What is an example of an injection attack listed in the OWASP Top 10?",
    options: [
      "Clickjacking",
      "SQL or NoSQL Injection",
      "Cross-Site Scripting (XSS)",
      "Denial of Service (DoS)"
    ],
    correct: [1],
    explanation: "Injection attacks, such as SQL or NoSQL injection, occur when an attacker inserts malicious code into a query or command to manipulate the database."
  },
  {
    question: "What is Server-Side Request Forgery (SSRF)?",
    options: [
      "An attack where the server is tricked into making requests to internal resources",
      "An attack where JavaScript modifies web page content",
      "A vulnerability caused by weak password policies",
      "A method for securing web APIs"
    ],
    correct: [0],
    explanation: "SSRF is an attack where an attacker manipulates server-side requests to access internal resources, potentially exposing sensitive data."
  },
  {
    question: "How does OWASP ASVS help improve application security?",
    options: [
      "By listing the top 10 most common vulnerabilities",
      "By providing a structured framework for security verification",
      "By scanning software for vulnerabilities automatically",
      "By enforcing security updates in all web applications"
    ],
    correct: [1],
    explanation: "OWASP ASVS (Application Security Verification Standard) provides a structured framework for assessing security, covering aspects like authentication, session management, and access control."
  }
];

/*

OWASP - Open Web APplication Security Project

- is a non profit organisation focused on improving the security of software, particularly 
web applications;
- it provides free resources, tools and best practices to help us build and maintain secure
applications

key aspects of OWASP:

OWASP top 10

- a widely recognized list of the most critical security risks to web applications, updated 
periodically, such as: broken access control - improperly enforced access restrictions allowing
unauthorized users to access sensitive data or functionality, Injection - attacks injecting code 
SQL or NOSQL injection, Server Side Request Forgery or SSRF - attackers manipulating server-side
resources to access internal resources


OWASP SAMM (Software Assurance Maturity Model)

- a framework for integrating security into software development through governance - defining 
security policies and compliance requirements, design - secure architecture and thread model, 
implementation - secure coding practices and security testing, operations - incident management and
security monitoring

OWASP ASVS (Application Security Verification Standard)

- covers aspects such as: authentication and session management, auth, access control, input validation,
logging, monitoring, etc...

OWASP Dependency Check

- a tool that analyzes software dependencies for known vulnerabilities
- it scans project dependencies and compares them against the NVD - National Vulnerability Database, 
then it provides recommendations for updates




*/
