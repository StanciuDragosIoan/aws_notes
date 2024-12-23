/*
• Domain 1: Design Secure Architectures

##### Question 1

A company runs a public-facing three-tier web application in a VPC across multiple Availability Zones.
Amazon EC2 instances for the application tier running in private subnets need to download software
patches from the internet. However, the EC2 instances cannot be directly accessible from the internet.
Which actions should be taken to allow the EC2 instances to download the needed patches? (Select
TWO.)

A) Configure a NAT gateway in a public subnet.
B) Define a custom route table with a route to the NAT gateway for internet traffic and associate it with the
private subnets for the application tier.
C) Assign Elastic IP addresses to the EC2 instances.
D) Define a custom route table with a route to the internet gateway for internet traffic and associate it with
the private subnets for the application tier.
E) Configure a NAT instance in a private subnet.


Correct answers are A and B

• Domain 1: Design Secure Architectures



1) A company runs a public-facing three-tier web application in a VPC across multiple Availability Zones.
Amazon EC2 instances for the application tier running in private subnets need to download software
patches from the internet. However, the EC2 instances cannot be directly accessible from the internet.
Which actions should be taken to allow the EC2 instances to download the needed patches? (Select
TWO.)

A) Configure a NAT gateway in a public subnet.
B) Define a custom route table with a route to the NAT gateway for internet traffic and associate it with the
private subnets for the application tier.
C) Assign Elastic IP addresses to the EC2 instances.
D) Define a custom route table with a route to the internet gateway for internet traffic and associate it with
the private subnets for the application tier.
E) Configure a NAT instance in a private subnet.


Correct answers are A and B

Explanation:
To allow EC2 instances in a private subnet to download patches, they need outbound internet access, but private 
subnets don’t have direct access to the internet. A NAT (Network Address Translation) service is required.

A) Configure a NAT gateway in a public subnet:
NAT Gateway enables instances in private subnets to connect to the internet. It must reside in a public subnet to function as a bridge.

B) Define a custom route table with a route to the NAT gateway for internet traffic and associate it with the private subnets for the 
application tier: Private subnets must have a route to the NAT Gateway via a custom route table to direct outbound internet traffic.

Why the other options are incorrect:

C) Assign Elastic IP addresses to the EC2 instances:
Elastic IPs are only usable for instances in public subnets. Private subnet instances cannot have Elastic IPs directly assigned to them.

D) Define a custom route table with a route to the internet gateway for internet traffic and associate it with the private subnets for the application tier:
Internet gateways are only accessible to public subnets. Associating it directly with private subnets would violate their isolation.

E) Configure a NAT instance in a private subnet:
NAT instances are a legacy approach and must reside in a public subnet, not a private one.






###### Question 2 

2) A company plans to run a monitoring application on an Amazon EC2 instance in a VPC. Connections
are made to the EC2 instance using the instance’s private IPv4 address. A solutions architect needs to
design a solution that will allow traffic to be quickly directed to a standby EC2 instance if the application
fails and becomes unreachable.

Which approach will meet these requirements?


A) Deploy an Application Load Balancer configured with a listener for the private IP address and register the
primary EC2 instance with the load balancer. Upon failure, de-register the instance and register the
standby EC2 instance.

B) Configure a custom DHCP option set. Configure DHCP to assign the same private IP address to the
standby EC2 instance when the primary EC2 instance fails.

C) Attach a secondary elastic network interface to the EC2 instance configured with the private IP address.
Move the network interface to the standby EC2 instance if the primary EC2 instance becomes
unreachable.

D) Associate an Elastic IP address with the network interface of the primary EC2 instance. Disassociate the
Elastic IP from the primary instance upon failure and associate it with a standby EC2 instance.



Correct answer: A;


Explanations:

A) Application Load Balancer
Correct Answer.

The key here is using an Application Load Balancer (ALB). The ALB can distribute traffic to multiple 
EC2 instances based on routing rules. In this case, you can register the primary EC2 instance and 
configure the load balancer to direct traffic to it. If the primary instance fails, the load balancer 
can deregister it from the pool and register the standby EC2 instance.
This provides automatic failover to the standby EC2 instance without the need for manual intervention, 
ensuring resilience and high availability. This approach leverages the built-in health checks and automatic 
failover capabilities of the ALB.

B) Custom DHCP Option Set
Incorrect.
A custom DHCP option set can define specific network configurations (like DNS), but it does not solve the 
problem of directing traffic to a standby instance in the event of a failure. Additionally, DHCP does not 
have the capability to assign the same private IP address to a standby instance upon failure automatically, 
so this would not meet the requirements.

C) Secondary Elastic Network Interface (ENI)
Incorrect.
Attaching a secondary Elastic Network Interface (ENI) to the EC2 instance and moving it to a standby 
instance is possible, but it introduces complexity and manual intervention. ENI failover is not automatic, 
and this would require additional steps to move the ENI, which is not an optimal solution for automatic 
failover in a failure scenario.

D) Elastic IP Address (EIP) Failover
Incorrect.
While Elastic IP addresses (EIP) can be disassociated and reassociated between instances, this approach 
also requires manual intervention and does not provide the automatic failover needed in this case. Using 
EIP introduces delays in the failover process because it requires updating DNS and manual reassociation, 
which is not ideal for quick failover.




###### Question 3

A company runs an online voting system for a weekly live television program. During broadcasts,
users submit hundreds of thousands of votes within minutes to a front-end fleet of Amazon EC2
instances that run in an Auto Scaling group. The EC2 instances write the votes to an Amazon RDS
database. However, the database is unable to keep up with the requests that come from the EC2
instances. A solutions architect must design a solution that processes the votes in the most efficient
manner and without downtime.

Which solution meets these requirements?

A) Migrate the front-end application to AWS Lambda. Use Amazon API Gateway to route user requests to
the Lambda functions.

B) Scale the database horizontally by converting it to a Multi-AZ deployment. Configure the front-end
application to write to both the primary and secondary DB instances.

C) Configure the front-end application to send votes to an Amazon Simple Queue Service (Amazon SQS)
queue. Provision worker instances to read the SQS queue and write the vote information to the database.

D) Use Amazon EventBridge (Amazon CloudWatch Events) to create a scheduled event to re-provision the
database with larger, memory optimized instances during voting periods. When voting ends, re-provision
the database to use smaller instances.



Correct answer C;

Explanations:

A) Migrate the front-end application to AWS Lambda. Use Amazon API Gateway to route user requests 
to the Lambda functions:

Incorrect.

Moving the front-end application to AWS Lambda is not an ideal solution for this use case. Lambda is 
designed for stateless and short-lived operations, not for handling continuous and high-volume workloads 
like voting requests.While Lambda is great for many use cases, it is not designed to handle large bursts 
of traffic with data persistence like this without introducing complexity (e.g., managing state or writing 
data to a database).API Gateway + Lambda is typically more suited for smaller, stateless applications, 
rather than efficiently handling high-throughput, real-time data like votes.



B) Scale the database horizontally by converting it to a Multi-AZ deployment. Configure the front-end 
application to write to both the primary and secondary DB instances:

Incorrect.

Multi-AZ deployments in Amazon RDS are used for high availability and disaster recovery, not for scaling 
the database horizontally to handle a large number of writes. The secondary instance in a Multi-AZ 
deployment is a standby replica used for failover, and write operations still happen on the primary 
instance. This doesn't address the underlying problem of the database being overwhelmed by the volume 
of votes. Horizontal scaling (sharding) or offloading writes to a queue is a better solution to handle 
bursts of data without overloading the database.


C) Configure the front-end application to send votes to an Amazon Simple Queue Service (Amazon SQS) queue. 
Provision worker instances to read the SQS queue and write the vote information to the database:

Correct Answer.

Amazon SQS is a highly scalable, fully managed message queue service that is ideal for decoupling 
components in a system. In this case, the front-end application would send the votes to an SQS queue.
Worker instances (EC2 instances, Lambda functions, etc.) can then process the votes from the queue 
at a manageable rate, ensuring that the database is not overwhelmed by the sudden burst of votes. 
This approach decouples the application from the database and allows for asynchronous processing, 
which is much more scalable. SQS can handle large volumes of requests, and worker instances can be 
scaled dynamically to keep up with demand without causing issues for the database. This ensures 
that the application remains available even during peak voting periods.

D) Use Amazon EventBridge (Amazon CloudWatch Events) to create a scheduled event to re-provision 
the database with larger, memory-optimized instances during voting periods. When voting ends, 
re-provision the database to use smaller instances:

Incorrect.

While EventBridge can automate events based on time, dynamically changing the database instance size
based on demand is not a scalable or cost-efficient approach.
This solution involves manual re-provisioning of the database, which could lead to service disruptions 
and is not the most efficient way to handle the burst in demand.
It also doesn't address the core issue of handling bursts of traffic efficiently without overloading 
the database in real time.



###### Question 4 

A company has a two-tier application architecture that runs in public and private subnets. Amazon EC2
instances running the web application are in the public subnet and an EC2 instance for the database runs
on the private subnet. The web application instances and the database are running in a single Availability
Zone (AZ).
Which combination of steps should a solutions architect take to provide high availability for this


A) Create new public and private subnets in the same AZ.
B) Create an Amazon EC2 Auto Scaling group and Application Load Balancer spanning multiple AZs for the
web application instances.
C) Add the existing web application instances to an Auto Scaling group behind an Application Load
Balancer.
D) Create new public and private subnets in a new AZ. Create a database using an EC2 instance in the
public subnet in the new AZ. Migrate the old database contents to the new database.
E) Create new public and private subnets in the same VPC, each in a new AZ. Create an Amazon RDS
Multi-AZ DB instance in the private subnets. Migrate the old database contents to the new DB instance. 



Answer is B and E


Analysis of Each Option:

A) Create new public and private subnets in the same AZ:

Incorrect.

Creating new subnets in the same AZ does not improve availability. High availability requires spreading resources across multiple 
Availability Zones (AZs) to ensure redundancy in case of an AZ failure.

B) Create an Amazon EC2 Auto Scaling group and Application Load Balancer spanning multiple AZs for the web application instances:

Correct.

Using an Auto Scaling group and an Application Load Balancer (ALB) across multiple AZs improves both scalability and high availability.

If one AZ goes down, the ALB can route traffic to healthy instances in other AZs, while the Auto Scaling group can launch instances in available AZs.

C) Add the existing web application instances to an Auto Scaling group behind an Application Load Balancer:

Incorrect.

Adding existing instances to an Auto Scaling group does not inherently provide high availability unless the group is configured to operate 
across multiple AZs. The question does not specify that the Auto Scaling group is multi-AZ. Moreover, manually adding instances is not the 
best practice for setting up scalable and highly available architectures.

D) Create new public and private subnets in a new AZ. Create a database using an EC2 instance in the public subnet in the new AZ. Migrate 
the old database contents to the new database:

Incorrect.

Databases should be placed in private subnets, not public subnets, to ensure security. This option violates security best practices, 
even if it improves availability by introducing redundancy.

E) Create new public and private subnets in the same VPC, each in a new AZ. Create an Amazon RDS Multi-AZ DB instance in the private subnets. 
Migrate the old database contents to the new DB instance:

Correct.

Using Amazon RDS Multi-AZ creates a standby instance in a different AZ, providing automatic failover and improving database availability.
This approach also follows best practices by hosting the database in private subnets across multiple AZs, ensuring both security and high 
availability.



####### Question 5

A website runs a custom web application that receives a burst of traffic each day at noon. The users
upload new pictures and content daily, but have been complaining of timeouts. The architecture uses
Amazon EC2 Auto Scaling groups, and the application consistently takes 1 minute to initiate upon boot
up before responding to user requests.

How should a solutions architect redesign the architecture to better respond to changing traffic?

A) Configure a Network Load Balancer with a slow start configuration.
B) Configure Amazon ElastiCache for Redis to offload direct requests from the EC2 instances.
C) Configure an Auto Scaling step scaling policy with an EC2 instance warmup condition.
D) Configure Amazon CloudFront to use an Application Load Balancer as the origin.


Answer C

Explanations:

A) Configure a Network Load Balancer with a slow start configuration:

Incorrect.

A slow start configuration for a Network Load Balancer (NLB) allows gradual increase in the proportion 
of traffic routed to new instances. However, the issue here is not traffic distribution but the startup 
time of the EC2 instances during scaling events. NLBs do not address this initialization delay.


B) Configure Amazon ElastiCache for Redis to offload direct requests from the EC2 instances:

Incorrect.

While ElastiCache can improve performance by caching frequently accessed data, this does not solve 
the core issue of EC2 instances taking time to initialize when handling bursts of traffic. The problem 
lies in scaling and initialization, not in read performance.

C) Configure an Auto Scaling step scaling policy with an EC2 instance warmup condition:

Correct.

The warmup condition ensures that Auto Scaling waits for new instances to finish initializing before 
considering them as fully active and ready to handle traffic.
By configuring a step scaling policy, you can proactively increase capacity when traffic is expected 
to spike (e.g., right before noon), ensuring instances are initialized and ready to handle the workload.
This directly addresses the startup delay issue and prevents timeouts during traffic bursts.

D) Configure Amazon CloudFront to use an Application Load Balancer as the origin:

Incorrect.

CloudFront improves performance by caching static content and reducing latency for geographically 
dispersed users. However, it does not solve the issue of EC2 instance initialization delays or 
handle dynamic traffic bursts effectively.




*/