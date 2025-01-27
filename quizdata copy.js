const quizData = [
  {
    question: `An analytics company is planning to offer a web analytics service to its users. The service 
                    will require that the users’ webpages include a JavaScript script that makes authenticated GET 
                    requests to the company’s Amazon S3 bucket.
                    What must a solutions architect do to ensure that the script will successfully execute?`,
    options: [
      'Enable cross-origin resource sharing (CORS) on the S3 bucket.',
      'Enable S3 Versioning on the S3 bucket.',
      'Provide the users with a signed URL for the script.',
      'Configure an S3 bucket policy to allow public execute privileges',
    ],
    correct: [0],
    explanation: `
<p>
  The scenario describes a web analytics service where users include a JavaScript script on their webpages. 
  This script makes authenticated GET requests to an Amazon S3 bucket. The primary concern here is ensuring that 
  the JavaScript can successfully execute and access the S3 resources (e.g., images, scripts, etc.) from a different 
  origin (the users' webpages) without encountering cross-origin restrictions.
</p>

<p>
  <strong>Here’s why A is the correct answer:</strong>
</p>

<p>
  <strong>A) Enable cross-origin resource sharing (CORS) on the S3 bucket:</strong><br>
  Correct Answer. Cross-Origin Resource Sharing (CORS) is a mechanism that allows resources (like JavaScript, images, fonts, etc.) 
  hosted on one domain to be requested by a web page hosted on a different domain.
</p>

<p>
  Since the JavaScript script from the users' webpages will be making requests to the S3 bucket (which is hosted on a different domain 
  or origin), the browser will block these requests by default due to same-origin policy restrictions.
</p>

<p>
  Enabling CORS on the S3 bucket will allow the JavaScript to successfully make cross-origin requests to the S3 bucket. The CORS 
  configuration will define which HTTP methods (e.g., GET) and headers are allowed for requests from the different origin (users' 
  webpages).
</p>

<p>
  <strong>Why the other options are incorrect:</strong>
</p>

<p>
  <strong>B) Enable S3 Versioning on the S3 bucket:</strong><br>
  Enabling S3 Versioning is useful for keeping multiple versions of objects in a bucket, 
  but it does not impact cross-origin access or allow the JavaScript script to make requests. It is unrelated to the web-based authentication 
  or execution scenario described in the question.
</p>

<p>
  <strong>C) Provide the users with a signed URL for the script:</strong><br>
  A signed URL would allow access to a specific object in the S3 bucket with temporary credentials, but this is not required for enabling 
  cross-origin requests. Signed URLs are typically used for temporary access to private S3 objects, not for allowing cross-origin access 
  for JavaScript scripts.
</p>

<p>
  <strong>D) Configure an S3 bucket policy to allow public execute privileges:</strong><br>
  Configuring the S3 bucket policy to allow public execute privileges is risky and unnecessary. While it would technically allow users to 
  execute requests, it would expose the S3 bucket to the public, which might violate security and privacy requirements. The focus should 
  be on enabling CORS and providing access through proper means, not by making the bucket publicly accessible.
</p>

<p>
  <strong>Associated Domain:</strong>
</p>

<p>
  This question belongs to <strong>Domain 1: Design Secure Architectures</strong> and <strong>Domain 3: Design High-Performing 
  Architectures</strong>.
</p>

<p>
  <strong>Here's why:</strong>
</p>

<p>
  <strong>Security Aspect:</strong> CORS is essential for securing cross-origin requests, which is a fundamental part of web security 
  when accessing S3 resources from other domains.
</p>

<p>
  <strong>Performance Aspect:</strong> By properly configuring CORS, you ensure that the JavaScript script from the users' webpages can 
  execute without unnecessary redirects or errors, contributing to better performance. In your original classification, Domain 1 would 
  be more accurate because the focus is on ensuring secure and proper access to S3 resources from the user's webpage.
</p>

        `,
  },
  {
    question: `A tech company has a CRM application hosted on an Auto Scaling group of On-Demand EC2 instances with different instance types 
    and sizes. The application is extensively used during office hours from 9 in the morning to 5 in the afternoon. Their users are complaining 
    that the performance of the application is slow during the start of the day but then works normally after a couple of hours.

    Which of the following is the MOST operationally efficient solution to implement to ensure the application works properly at the 
    beginning of the day?`,
    options: [
      'Configure a Dynamic scaling policy for the Auto Scaling group to launch new instances based on the CPU utilization.',
      'Configure a Dynamic scaling policy for the Auto Scaling group to launch new instances based on the Memory utilization.',
      'Configure a Scheduled scaling policy for the Auto Scaling group to launch new instances before the start of the day.',
      'Configure a Predictive scaling policy for the Auto Scaling group to automatically adjust the number of Amazon EC2 instances',
    ],
    correct: [3], // Correct option index (0-based),
    explanation: `
<p>
  Predictive scaling uses machine learning to analyze historical usage patterns and predicts future demand. It proactively adjusts the 
  number of instances to ensure the application has the necessary capacity before the demand spike occurs. By analyzing trends, it can 
  prepare the infrastructure to handle workloads effectively without any manual intervention.
</p>
<p>
  This approach is more operationally efficient because it dynamically adapts to changes in demand patterns over time, without requiring 
  manual schedule updates. It ensures that the required instances are already running before the peak demand begins, avoiding performance 
  degradation at the start of the day.
</p>
<p>
  Predictive scaling ensures optimal performance at the start of the day and throughout the day while minimizing manual effort and 
  maintaining cost efficiency. This makes it the best solution for this scenario.
</p>

<p><strong>Why the other options are incorrect:</strong></p>

<p><strong>A) Configure a Dynamic scaling policy for the Auto Scaling group to launch new instances based on the CPU utilization:</strong></p>
<p>
  This option is operationally less efficient because dynamic scaling reacts to metrics like CPU utilization, which means instances are launched 
  only after a spike has occurred. This reactive approach cannot address the performance issues at the start of the day, as it requires some time 
  to gather metrics and launch instances. By the time the new instances are ready, users will have already experienced degraded performance.
</p>

<p><strong>B) Configure a Dynamic scaling policy for the Auto Scaling group to launch new instances based on the Memory utilization:</strong></p>
<p>
  Similar to Option A, this approach is also reactive. While memory utilization is another important metric, dynamic scaling based on memory usage 
  still suffers from the delay between detecting increased demand and launching new instances. The performance at the start of the day would still 
  be suboptimal, as new instances would not be ready when the demand begins to increase.
</p>

<p><strong>C) Configure a Scheduled scaling policy for the Auto Scaling group to launch new instances before the start of the day:</strong></p>
<p>
  While this option can address the performance issue by launching instances before the demand spike, it is less operationally efficient compared 
  to predictive scaling. Scheduled scaling requires manual updates to the schedule if the usage patterns change (e.g., holidays, weekends, or changes 
  in work hours). Predictive scaling, on the other hand, automatically adapts to such changes by analyzing historical data and predicting future demand.
</p>

<p><strong>D) Configure a Predictive scaling policy for the Auto Scaling group to automatically adjust the number of Amazon EC2 instances:</strong></p>
<p>
  <strong>Correct.</strong> Predictive scaling is the most operationally efficient solution because it uses machine learning to analyze historical 
  usage patterns and predicts future demand. By launching instances proactively before the peak demand starts, it ensures optimal performance 
  at the beginning of the day without requiring manual intervention or constant updates to scaling policies. This approach provides a balance 
  between performance and cost-efficiency.
</p>

<p><strong>Associated Domain: Design High Performant Architectures</strong></p>
      `,
  },
  {
    question: `An application running on AWS uses an Amazon Aurora Multi-AZ DB cluster deployment for its
database. When evaluating performance metrics, a solutions architect discovered that the database 
reads are causing high I/O and adding latency to the write requests against the database.

What should the solutions architect do to separate the read requests from the write requests?`,
    options: [
      'Enable read-through caching on the Aurora database.',
      'Update the application to read from the Multi-AZ standby instance.',
      'Create an Aurora replica and modify the application to use the appropriate endpoints.',
      'Create a second Aurora database and link it to the primary database as a read replica.',
    ],
    correct: [2], // Multiple correct options,
    explanation: `
      <p><strong>A) Enable read-through caching on the Aurora database:</strong></p>
<p><strong>Incorrect.</strong></p>
<p>
  Aurora does not support "read-through caching" as a native feature. While you can implement caching 
  using Amazon ElastiCache (e.g., Redis or Memcached) to offload frequent reads, this is not a direct 
  Aurora feature. Additionally, the question does not mention frequent repeated reads that would benefit 
  from caching—it focuses on separating reads from writes.
</p>

<p><strong>B) Update the application to read from the Multi-AZ standby instance:</strong></p>
<p><strong>Incorrect.</strong></p>
<p>
  The Multi-AZ standby instance in Aurora is meant for disaster recovery (failover) and is not 
  available for serving read traffic. Reads cannot be directed to the standby instance.
</p>

<p><strong>C) Create an Aurora replica and modify the application to use the appropriate endpoints:</strong></p>
<p><strong>Correct.</strong></p>
<p>
  Creating Aurora replicas is the recommended way to handle high read traffic. Aurora allows you to:
  <ul>
    <li>Create up to 15 replicas within a cluster.</li>
    <li>Use the cluster endpoint for writes and the reader endpoint for reads. This separates read and 
    write traffic effectively.</li>
  </ul>
</p>
<p>
  By modifying the application to use the reader endpoint, read requests are directed to replicas, 
  reducing I/O on the primary instance.
</p>

<p><strong>D) Create a second Aurora database and link it to the primary database as a read replica:</strong></p>
<p><strong>Incorrect.</strong></p>
<p>
  This approach is unnecessary and inefficient because Aurora supports built-in replication 
  within the same cluster. Creating an entirely new database for read replication increases 
  complexity and cost.
</p>
<p><strong>Associated Domain: Design Resilient Architectures</strong></p>
      `,
  },
  {
    question: `
A solutions architect wants to design a solution to save costs for Amazon EC2 instances that do not
need to run during a 2-week company shutdown. The applications running on the EC2 instances store
data in instance memory that must be present when the instances resume operation.
Which approach should the solutions architect recommend to shut down and resume the EC2 instances?
    `,
    options: [`Modify the application to store the data on instance store volumes. Reattach the volumes while restarting
them.`, 
` Snapshot the EC2 instances before stopping them. Restore the snapshot after restarting the instances.`,
`Run the applications on EC2 instances enabled for hibernation. Hibernate the instances before the 2-
week company shutdown.`, 
`Note the Availability Zone for each EC2 instance before stopping it. Restart the instances in the same
Availability Zones after the 2-week company shutdown.`],
    correct: [2],
    explanation: `
EC2 instances that are hibernated retain the contents of the instance's memory (RAM), and when resumed, the data is 
restored, allowing the application to pick up exactly where it left off. This approach saves costs, as hibernating 
the instance stops it while maintaining its state in memory. When the 2-week shutdown ends, the instance can be 
resumed, and all in-memory data will still be available.
<p>
  Hibernation for Amazon EC2 instances is the most efficient way to save costs while preserving data in 
  memory. When an instance is hibernated, the in-memory (RAM) state is saved to the root volume, and the 
  instance can resume from where it left off without losing data. This makes it ideal for scenarios where 
  instances do not need to run for a specific period but must retain their state upon resumption.
</p>
<p>
  Since the company's shutdown lasts for two weeks, hibernating the EC2 instances ensures that they can 
  resume operation seamlessly without requiring reconfiguration or data restoration. This approach 
  minimizes downtime and operational overhead.
</p>

<p><strong>Why the other options are incorrect:</strong></p>

<p><strong>A) Modify the application to store the data on instance store volumes. Reattach the volumes while restarting them.</strong></p>
<p>
  <strong>Incorrect.</strong> Instance store volumes (also known as ephemeral storage) are physically attached to the EC2 host 
  and are lost when the instance is stopped or terminated. Since the data must persist during the 2-week 
  shutdown, using instance store volumes is not a viable option. These volumes cannot be detached and 
  reattached to another instance, making them unsuitable for this requirement.
</p>

<p><strong>B) Snapshot the EC2 instances before stopping them. Restore the snapshot after restarting the instances.</strong></p>
<p>
  <strong>Incorrect.</strong> While snapshots allow for data backup, they do not preserve in-memory data. Restoring from a snapshot 
  would require launching new instances and manually reloading data into memory, which is not operationally 
  efficient. This process adds unnecessary complexity and downtime compared to hibernation, which retains 
  the instance’s exact state.
</p>

<p><strong>D) Note the Availability Zone for each EC2 instance before stopping it. Restart the instances in the same Availability Zones 
after the 2-week company shutdown.</strong></p>
<p>
  <strong>Incorrect.</strong> While restarting instances in the same Availability Zone ensures that they maintain networking 
  configurations, it does not solve the issue of preserving in-memory data. When an EC2 instance is stopped, 
  its in-memory data is lost unless hibernation is enabled. This approach does not provide any mechanism for 
  data retention and does not address the cost-saving requirement as effectively as hibernation.
</p>

<p><strong>C) Run the applications on EC2 instances enabled for hibernation. Hibernate the instances before the 2-week company shutdown.</strong></p>
<p>
  <strong>Correct.</strong> Hibernation is the best solution because it saves the instance’s RAM contents to the root volume, 
  allowing the instance to resume exactly where it left off when restarted. This method prevents data loss, 
  reduces the need for manual reconfiguration, and ensures a seamless transition when the company resumes 
  operations. Additionally, hibernation helps reduce costs by stopping the instances while preserving their 
  state for future use.
</p>
<p><strong>Associated Domain: Design Cost Optimised Architectures</strong></p>
<p><strong>Associated Domain: Design High performant Architectures & Design Cost Optimized Architecture</strong></p>
    `,
  },
  {
    question: `
    A company uses Amazon EC2 Reserved Instances to run its data processing workload. The nightly job
    typically takes 7 hours to run and must finish within a 10-hour time window. The company anticipates
    temporary increases in demand at the end of each month that will cause the job to run over the time limit
    with the capacity of the current resources. Once started, the processing job cannot be interrupted before
    completion. The company wants to implement a solution that would provide increased resource capacity
    as cost-effectively as possible.
    What should a solutions architect do to accomplish this?
    `,
    options: ['Deploy On-Demand Instances during periods of high demand.', 
      'Create a second EC2 reservation for additional instances.', 
      'Deploy Spot Instances during periods of high demand.', 
      'Increase the EC2 instance size in the EC2 reservation to support the increased workload.'],
    correct: [0],
    explanation: `
    <p>
  The best solution for handling temporary increases in demand while keeping costs manageable is to deploy 
  <strong>On-Demand Instances</strong> during peak usage periods. On-Demand Instances allow the company to scale up compute 
  capacity as needed without long-term commitments, making them a cost-effective solution for occasional 
  workload spikes. Since the processing job cannot be interrupted once started, Spot Instances are not 
  a viable option, and purchasing additional Reserved Instances would be inefficient for a temporary need.
</p>
<p>
  By using On-Demand Instances only when necessary, the company can maintain cost efficiency while ensuring 
  the job completes within the required 10-hour window.
</p>

<p><strong>Why the other options are incorrect:</strong></p>

<p><strong>B) Create a second EC2 reservation for additional instances.</strong></p>
<p>
  <strong>Incorrect.</strong> While Reserved Instances provide cost savings for steady-state workloads, they require a 
  long-term commitment (typically 1 or 3 years). Since the increased demand occurs only at the end of each 
  month, purchasing additional Reserved Instances would lead to unnecessary costs for unused capacity 
  during the rest of the month. On-Demand Instances provide a more flexible and cost-effective solution 
  for handling temporary spikes.
</p>

<p><strong>C) Deploy Spot Instances during periods of high demand.</strong></p>
<p>
  <strong>Incorrect.</strong> Spot Instances are the most cost-effective EC2 option but come with the risk of termination 
  if AWS needs to reclaim capacity. Because the processing job cannot be interrupted before completion, 
  Spot Instances are unsuitable for this workload. On-Demand Instances provide the required reliability 
  without the risk of termination.
</p>

<p><strong>D) Increase the EC2 instance size in the EC2 reservation to support the increased workload.</strong></p>
<p>
  <strong>Incorrect.</strong> While increasing the instance size could help process the workload faster, it would lead 
  to over-provisioning and increased costs during non-peak periods. Additionally, modifying Reserved 
  Instances to larger instance sizes may not always be possible within the reservation, and it still does 
  not provide a flexible solution for handling temporary spikes. On-Demand Instances allow the company to 
  scale resources only when necessary, making them the better choice.
</p>

<p><strong>A) Deploy On-Demand Instances during periods of high demand.</strong></p>
<p>
  <strong>Correct.</strong> On-Demand Instances are the best option for handling temporary workload increases while 
  maintaining cost efficiency. They provide the flexibility to scale up resources as needed without long-term 
  commitments, ensuring the processing job completes within the required time frame without unnecessary 
  additional costs.
</p>

<p>
  !Note An <strong>Amazon EC2 Reserved Instance (RI)</strong> is a pricing model that provides a <strong>discounted rate</strong> for 
  committing to a specific instance type and region for <strong>1 or 3 years</strong>.
</p>
<p>
  Reserved Instances help reduce costs by offering up to <strong>75% savings</strong> compared to On-Demand pricing. They are 
  ideal for <strong>steady-state workloads</strong> that run continuously.
</p>
<p>
  Some RIs also provide <strong>capacity reservation</strong> in a specific Availability Zone, ensuring instance availability 
  when needed.
</p>
<p><strong>Associated Domain: Design High Performance Architectures & Design Cost Optimized Architecture</strong></p>
    `,
  },
  {
    question: `
A company runs a public-facing three-tier web application in a VPC across multiple Availability Zones.
Amazon EC2 instances for the application tier running in private subnets need to download software
patches from the internet. However, the EC2 instances cannot be directly accessible from the internet.
Which actions should be taken to allow the EC2 instances to download the needed patches? (Select
TWO.)
    `,
    options: ['Configure a NAT gateway in a public subnet.', 
`Define a custom route table with a route to the NAT gateway for internet traffic and associate it with the
private subnets for the application tier.`, 
`Assign Elastic IP addresses to the EC2 instances.`, 
`Define a custom route table with a route to the internet gateway for internet traffic and associate it with
the private subnets for the application tier.`,
`Configure a NAT instance in a private subnet.`],
    correct: [0, 1],
    explanation: `
    <p><strong>Domain: Networking & VPC</strong></p>

<p>
  To allow EC2 instances in private subnets to download software patches from the internet, the best 
  solution is to use a <strong>NAT gateway</strong> and configure routing correctly. A NAT gateway enables outbound 
  internet access for instances in private subnets while keeping them inaccessible from external traffic.
</p>

<p><strong>Correct Answers:</strong></p>

<p><strong>A) Configure a NAT gateway in a public subnet.</strong></p>
<p>
  <strong>Correct.</strong> A NAT gateway allows instances in private subnets to initiate outbound connections 
  to the internet while preventing direct inbound access from the internet.
</p>

<p><strong>B) Define a custom route table with a route to the NAT gateway for internet traffic and associate it with the private subnets.</strong></p>
<p>
  <strong>Correct.</strong> Private subnets must have a route to the NAT gateway in their route table to allow outbound 
  internet access for downloading patches.
</p>

<p><strong>Why the other options are incorrect:</strong></p>

<p><strong>C) Assign Elastic IP addresses to the EC2 instances.</strong></p>
<p>
  <strong>Incorrect.</strong> Elastic IPs require direct internet access, which is not allowed in private subnets. 
  Instances in private subnets cannot have public IP addresses.
</p>

<p><strong>D) Define a custom route table with a route to the internet gateway for internet traffic and associate it with the private subnets.</strong></p>
<p>
  <strong>Incorrect.</strong> An internet gateway provides direct internet access, which only works for public subnets. 
  Private subnets must route outbound traffic through a NAT gateway.
</p>

<p><strong>E) Configure a NAT instance in a private subnet.</strong></p>
<p>
  <strong>Incorrect.</strong> A NAT instance can provide similar functionality to a NAT gateway, but it requires manual 
  maintenance, scaling, and security group configurations. AWS recommends using a NAT gateway for better 
  performance and availability.
</p>
<p><strong>Associated Domain: Design Secure Architectures</strong></p>
`,
  },
  {
    question: `
A company plans to run a monitoring application on an Amazon EC2 instance in a VPC. Connections
are made to the EC2 instance using the instance’s private IPv4 address. A solutions architect needs to
design a solution that will allow traffic to be quickly directed to a standby EC2 instance if the application
fails and becomes unreachable.
Which approach will meet these requirements?
    `,
    options: [`
      Deploy an Application Load Balancer configured with a listener for the private IP address and register the
primary EC2 instance with the load balancer. Upon failure, de-register the instance and register the
standby EC2 instance.
      `, 
      `Configure a custom DHCP option set. Configure DHCP to assign the same private IP address to the
standby EC2 instance when the primary EC2 instance fails.`, 
`Attach a secondary elastic network interface to the EC2 instance configured with the private IP address.
Move the network interface to the standby EC2 instance if the primary EC2 instance becomes
unreachable.`, 
`Associate an Elastic IP address with the network interface of the primary EC2 instance. Disassociate the
Elastic IP from the primary instance upon failure and associate it with a standby EC2 instance.`],
    correct: [0, 1],
    explanation: `
    <h1>Domain: Networking & VPC</h1>

<p>
  A company runs a public-facing three-tier web application in a VPC across multiple Availability Zones. 
  The Amazon EC2 instances for the application tier are in private subnets and need to download software patches 
  from the internet. However, these EC2 instances cannot be directly accessible from the internet. To allow them 
  to download patches, the following actions should be taken.
</p>

<h2>Correct Answers:</h2>

<p><strong>A) Configure a NAT gateway in a public subnet.</strong></p>
<p>
  <strong>Correct.</strong> A NAT gateway in a public subnet allows EC2 instances in private subnets to access the 
  internet for outbound traffic, such as downloading patches, while preventing inbound access from the internet. 
  This ensures the EC2 instances can download patches securely without being exposed to the public internet.
</p>

<p><strong>B) Define a custom route table with a route to the NAT gateway for internet traffic and associate it with the private subnets for the application tier.</strong></p>
<p>
  <strong>Correct.</strong> After configuring the NAT gateway, you need to define a custom route table for the private 
  subnets that directs internet-bound traffic to the NAT gateway. Associating this route table with the private subnets 
  allows the EC2 instances in these subnets to reach the internet through the NAT gateway for tasks like downloading 
  software patches.
</p>

<h2>Why the other options are incorrect:</h2>

<p><strong>C) Assign Elastic IP addresses to the EC2 instances.</strong></p>
<p>
  <strong>Incorrect.</strong> Elastic IP addresses are used to assign public IP addresses to instances, making them 
  accessible from the internet. Since the requirement is to prevent direct access to the EC2 instances, assigning 
  Elastic IP addresses would expose them to the public internet, which contradicts the goal of keeping them secure.
</p>

<p><strong>D) Define a custom route table with a route to the internet gateway for internet traffic and associate it with the private subnets for the application tier.</strong></p>
<p>
  <strong>Incorrect.</strong> An internet gateway provides direct access to the internet. However, private subnets should 
  not route traffic directly to the internet. Instead, traffic from private subnets should be routed through a NAT gateway, 
  which ensures that instances remain private and only have outbound internet access.
</p>

<p><strong>E) Configure a NAT instance in a private subnet.</strong></p>
<p>
  <strong>Incorrect.</strong> A NAT instance can provide similar functionality to a NAT gateway, but it requires manual 
  maintenance, scaling, and security group configurations. AWS recommends using a NAT gateway for better 
  performance and availability.
</p>

<p><strong>Unknown terms:</strong></p>

 <h2>What is DHCP?</h2>
    <p>
        <strong>DHCP (Dynamic Host Configuration Protocol)</strong> is a network protocol that 
        automatically assigns <strong>IP addresses</strong> and other necessary network settings, such as 
        <strong>subnet mask, default gateway, and DNS servers</strong>, to devices when they connect to a network. 
        This eliminates the need for manual IP configuration, making network management more efficient.
    </p>

    <h2>How DHCP Works</h2>
    <p>
        When a device (such as a computer or an EC2 instance) joins a network, it follows these steps to obtain an IP address:
    </p>
    <ul>
        <li><strong>Discovery:</strong> The device sends a broadcast request (<code>DHCPDISCOVER</code>) asking for an IP address.</li>
        <li><strong>Offer:</strong> The DHCP server responds with an available IP address (<code>DHCPOFFER</code>).</li>
        <li><strong>Request:</strong> The device accepts the offered IP address (<code>DHCPREQUEST</code>).</li>
        <li><strong>Acknowledgment:</strong> The DHCP server confirms the assignment (<code>DHCPACK</code>).</li>
    </ul>

    <h2>Why DHCP is Important</h2>
    <ul>
        <li><strong>Simplifies network management:</strong> No need to manually configure IP addresses for each device.</li>
        <li><strong>Prevents IP conflicts:</strong> Ensures each device gets a unique IP address.</li>
        <li><strong>Supports dynamic addressing:</strong> Devices can receive different IP addresses each time they connect.</li>
        <li><strong>Efficient use of IP addresses:</strong> IPs are leased temporarily, allowing reuse when devices disconnect.</li>
    </ul>

    <h2>DHCP in AWS</h2>
    <p>
        In AWS, <strong>DHCP is automatically managed within a VPC</strong>:
    </p>
    <ul>
        <li>When you launch an EC2 instance, AWS assigns it a <strong>private IP address</strong> using DHCP.</li>
        <li>If enabled, AWS can also assign <strong>public IP addresses</strong> dynamically.</li>
        <li>Custom <strong>DHCP option sets</strong> allow you to define custom DNS servers or other configurations for instances.</li>
    </ul>

    <h2>Unknown Terms Explained</h2>
    <h3>1. DHCP (Dynamic Host Configuration Protocol)</h3>
    <p>
        A network protocol that automatically assigns IP addresses and network settings to devices when they connect 
        to a network, eliminating the need for manual configuration.
    </p>

    <h3>2. NAT Gateway (Network Address Translation Gateway)</h3>
    <p>
        A managed AWS service that allows instances in a <strong>private subnet</strong> to connect to the <strong>internet</strong> 
        for outbound traffic (e.g., downloading updates) while preventing inbound traffic from the internet. 
        It is scalable and highly available by default.
    </p>

    <h3>3. NAT Instance (Network Address Translation Instance)</h3>
    <p>
        A <strong>self-managed EC2 instance</strong> that performs the same function as a NAT Gateway but requires manual setup, 
        monitoring, and scaling. It can be more customizable but lacks the built-in availability and scalability of a NAT Gateway.
    </p>
      <p><strong>Associated Domain: Design Resilient Architectures</strong></p>
    `,
  },
  {
    question: `
A company plans to run a monitoring application on an Amazon EC2 instance in a VPC. Connections
are made to the EC2 instance using the instance’s private IPv4 address. A solutions architect needs to
design a solution that will allow traffic to be quickly directed to a standby EC2 instance if the application
fails and becomes unreachable.

Which approach will meet these requirements?
`,
    options: [`
      Deploy an Application Load Balancer configured with a listener for the private IP address and register the
primary EC2 instance with the load balancer. Upon failure, de-register the instance and register the
standby EC2 instance.
      `, 
    `Configure a custom DHCP option set. Configure DHCP to assign the same private IP address to the
standby EC2 instance when the primary EC2 instance fails.`, 
`Attach a secondary elastic network interface to the EC2 instance configured with the private IP address.
Move the network interface to the standby EC2 instance if the primary EC2 instance becomes
unreachable.`, 
`Associate an Elastic IP address with the network interface of the primary EC2 instance. Disassociate the
Elastic IP from the primary instance upon failure and associate it with a standby EC2 instance.`],
    correct: [2],
    explanation: `
    <div>
    <h2>Domain: High Availability & Networking</h2>

    <h2>Correct Answer:</h2>
    <h3>C) Attach a secondary elastic network interface to the EC2 instance configured with the private IP address. Move the network interface to the standby EC2 instance if the primary EC2 instance becomes unreachable.</h3>
    <p>
        This is the best solution because an <strong>Elastic Network Interface (ENI)</strong> allows seamless failover 
        between instances while maintaining the same private IP address. If the primary instance fails, 
        the ENI can be detached and reattached to the standby instance, ensuring continuity of network 
        communication without requiring changes to DNS or client configurations.
    </p>

    <h2>Incorrect Answers:</h2>

    <h3>A) Deploy an Application Load Balancer configured with a listener for the private IP address and register the primary EC2 instance with the load balancer. Upon failure, de-register the instance and register the standby EC2 instance.</h3>
    <p>
        <strong>Incorrect.</strong> An <strong>Application Load Balancer (ALB)</strong> does not allow direct routing using private IPs. 
        ALBs operate at Layer 7 (HTTP/HTTPS) and do not support failover mechanisms using private 
        IPv4 addresses. This solution is ineffective for failover in this scenario.
    </p>

    <h3>B) Configure a custom DHCP option set. Configure DHCP to assign the same private IP address to the standby EC2 instance when the primary EC2 instance fails.</h3>
    <p>
        <strong>Incorrect.</strong> DHCP option sets in AWS do not allow assignment of a specific private IP to an EC2 instance. 
        Private IP addresses are dynamically assigned when an instance starts and cannot be controlled 
        via DHCP in this manner. Additionally, DHCP does not handle real-time failover.
    </p>

    <h3>D) Associate an Elastic IP address with the network interface of the primary EC2 instance. Disassociate the Elastic IP from the primary instance upon failure and associate it with a standby EC2 instance.</h3>
    <p>
        <strong>Incorrect.</strong> An <strong>Elastic IP (EIP)</strong> is a public IPv4 address used for internet-facing resources. 
        Since the requirement specifies using a <strong>private IPv4 address</strong>, this solution is not applicable. 
        EIPs are used for external access, not internal failover within a VPC.
    </p>
</div>
      <p><strong>Associated Domain: Design Resilient Architectures</strong></p>
    `,
  },
  {
    question: `
    A company runs an online voting system for a weekly live television program. During broadcasts,
users submit hundreds of thousands of votes within minutes to a front-end fleet of Amazon EC2
instances that run in an Auto Scaling group. The EC2 instances write the votes to an Amazon RDS
database. However, the database is unable to keep up with the requests that come from the EC2
instances. A solutions architect must design a solution that processes the votes in the most efficient
manner and without downtime.
Which solution meets these requirements?
    `,
    options: [`
      Migrate the front-end application to AWS Lambda. Use Amazon API Gateway to route user requests to
the Lambda functions.
      `, 
      `Scale the database horizontally by converting it to a Multi-AZ deployment. Configure the front-end
application to write to both the primary and secondary DB instances.`, 
` Configure the front-end application to send votes to an Amazon Simple Queue Service (Amazon SQS)
queue. Provision worker instances to read the SQS queue and write the vote information to the database.`, 
`Use Amazon EventBridge (Amazon CloudWatch Events) to create a scheduled event to re-provision the
database with larger, memory optimized instances during voting periods. When voting ends, re-provision
the database to use smaller instances.`],
    correct: [2],
    explanation: `
  <div>
  <p><strong>A) Migrate the front-end application to AWS Lambda. Use Amazon API Gateway to route user requests 
  to the Lambda functions:</strong></p>
  <p><strong>Incorrect.</strong></p>
  <p>Moving the front-end application to AWS Lambda is not an ideal solution for this use case. Lambda is 
  designed for stateless and short-lived operations, not for handling continuous and high-volume workloads 
  like voting requests. While Lambda is great for many use cases, it is not designed to handle large bursts 
  of traffic with data persistence like this without introducing complexity (e.g., managing state or writing 
  data to a database). API Gateway + Lambda is typically more suited for smaller, stateless applications, 
  rather than efficiently handling high-throughput, real-time data like votes.</p>

  <p><strong>B) Scale the database horizontally by converting it to a Multi-AZ deployment. Configure the front-end 
  application to write to both the primary and secondary DB instances:</strong></p>
  <p><strong>Incorrect.</strong></p>
  <p>Multi-AZ deployments in Amazon RDS are used for high availability and disaster recovery, not for scaling 
  the database horizontally to handle a large number of writes. The secondary instance in a Multi-AZ 
  deployment is a standby replica used for failover, and write operations still happen on the primary 
  instance. This doesn't address the underlying problem of the database being overwhelmed by the volume 
  of votes. Horizontal scaling (sharding) or offloading writes to a queue is a better solution to handle 
  bursts of data without overloading the database.</p>

  <p><strong>C) Configure the front-end application to send votes to an Amazon Simple Queue Service (Amazon SQS) queue. 
  Provision worker instances to read the SQS queue and write the vote information to the database:</strong></p>
  <p><strong>Correct Answer.</strong></p>
  <p>Amazon SQS is a highly scalable, fully managed message queue service that is ideal for decoupling 
  components in a system. In this case, the front-end application would send the votes to an SQS queue. 
  Worker instances (EC2 instances, Lambda functions, etc.) can then process the votes from the queue 
  at a manageable rate, ensuring that the database is not overwhelmed by the sudden burst of votes. 
  This approach decouples the application from the database and allows for asynchronous processing, 
  which is much more scalable. SQS can handle large volumes of requests, and worker instances can be 
  scaled dynamically to keep up with demand without causing issues for the database. This ensures 
  that the application remains available even during peak voting periods.</p>

  <p><strong>D) Use Amazon EventBridge (Amazon CloudWatch Events) to create a scheduled event to re-provision 
  the database with larger, memory-optimized instances during voting periods. When voting ends, 
  re-provision the database to use smaller instances:</strong></p>
  <p><strong>Incorrect.</strong></p>
  <p>While EventBridge can automate events based on time, dynamically changing the database instance size 
  based on demand is not a scalable or cost-efficient approach. This solution involves manual re-provisioning 
  of the database, which could lead to service disruptions and is not the most efficient way to handle the 
  burst in demand. It also doesn't address the core issue of handling bursts of traffic efficiently without 
  overloading the database in real time.</p>
</div>

<p><strong>Associated Domain: Design High Performant Architectures</strong></p>
    `,
  },
  {
    question: `
A company has a two-tier application architecture that runs in public and private subnets. Amazon EC2
instances running the web application are in the public subnet and an EC2 instance for the database runs
on the private subnet. The web application instances and the database are running in a single Availability
Zone (AZ).
Which combination of steps should a solutions architect take to provide high availability for this
    `,
    options: [`Create new public and private subnets in the same AZ.`, 
      `Create an Amazon EC2 Auto Scaling group and Application Load Balancer spanning multiple AZs for the
web application instances.`,
 `Add the existing web application instances to an Auto Scaling group behind an Application Load
Balancer.`, 
`Create new public and private subnets in a new AZ. Create a database using an EC2 instance in the
public subnet in the new AZ. Migrate the old database contents to the new database.`,
`Create new public and private subnets in the same VPC, each in a new AZ. Create an Amazon RDS
Multi-AZ DB instance in the private subnets. Migrate the old database contents to the new DB instance. `],
    correct: [1,4],
    explanation: `
<div>
  <p><strong>B) Create an Amazon EC2 Auto Scaling group and Application Load Balancer spanning multiple AZs for the web application instances:</strong></p>
  <p><strong>Correct Answer.</strong></p>
  <p>To improve high availability, the web application should be distributed across multiple Availability Zones (AZs). 
  An Auto Scaling group ensures that instances are automatically launched in different AZs, providing redundancy in case of failure. 
  An Application Load Balancer (ALB) distributes traffic evenly across the healthy instances, ensuring availability and reliability. 
  This setup prevents single points of failure and enhances fault tolerance.</p>

  <p><strong>E) Create new public and private subnets in the same VPC, each in a new AZ. Create an Amazon RDS Multi-AZ DB instance in the private subnets. Migrate the old database contents to the new DB instance:</strong></p>
  <p><strong>Correct Answer.</strong></p>
  <p>Amazon RDS Multi-AZ deployments provide high availability for the database by automatically maintaining a synchronous standby 
  replica in a different AZ. In case of failure, RDS automatically fails over to the standby without manual intervention. 
  Moving the database to Multi-AZ ensures that the database remains accessible even if one AZ goes down. Creating new public and private 
  subnets in another AZ allows for proper network distribution and redundancy.</p>

  <p><strong>A) Create new public and private subnets in the same AZ:</strong></p>
  <p><strong>Incorrect.</strong></p>
  <p>Creating new subnets in the same Availability Zone does not provide high availability. If the AZ goes down, all resources 
  within it become unavailable. High availability requires distributing resources across multiple AZs.</p>

  <p><strong>C) Add the existing web application instances to an Auto Scaling group behind an Application Load Balancer:</strong></p>
  <p><strong>Incorrect.</strong></p>
  <p>While adding instances to an Auto Scaling group and using an ALB is beneficial, it does not address the issue of high availability 
  since the setup remains in a single Availability Zone. High availability requires distributing instances across multiple AZs.</p>

  <p><strong>D) Create new public and private subnets in a new AZ. Create a database using an EC2 instance in the public subnet in the new AZ. Migrate the old database contents to the new database:</strong></p>
  <p><strong>Incorrect.</strong></p>
  <p>Placing the database in a public subnet is not a best practice for security and availability. Databases should reside in 
  private subnets with restricted access. Additionally, using an EC2 instance for the database instead of Amazon RDS Multi-AZ 
  does not provide automated failover, backups, and scalability.</p>
</div>
<p><strong>Associated Domain: Design Resilient Architectures</strong></p>
    `,
  },
  {
    question: `
A website runs a custom web application that receives a burst of traffic each day at noon. The users
upload new pictures and content daily, but have been complaining of timeouts. The architecture uses
Amazon EC2 Auto Scaling groups, and the application consistently takes 1 minute to initiate upon boot
up before responding to user requests.
How should a solutions architect redesign the architecture to better respond to changing traffic?
    `,
    options: [`Configure a Network Load Balancer with a slow start configuration.`,
       `Configure Amazon ElastiCache for Redis to offload direct requests from the EC2 instances.`, 
       `Configure an Auto Scaling step scaling policy with an EC2 instance warmup condition.`, 
       `Configure Amazon CloudFront to use an Application Load Balancer as the origin.`],
    correct: [2],
    explanation: `
<div>
  <p><strong>A) Configure a Network Load Balancer with a slow start configuration:</strong></p>
  <p><strong>Incorrect.</strong></p>
  <p>While a Network Load Balancer (NLB) with a slow start configuration can help manage instances that take time to warm up, this solution 
  is more appropriate for load balancing at the transport layer (Layer 4) with a focus on low latency, high-throughput applications. 
  It does not address the application's slow startup time directly. An NLB is not suitable for handling web applications with long 
  initialization periods where HTTP traffic is the main concern.</p>

  <p><strong>B) Configure Amazon ElastiCache for Redis to offload direct requests from the EC2 instances:</strong></p>
  <p><strong>Incorrect.</strong></p>
  <p>Amazon ElastiCache for Redis is used primarily for caching data to improve application performance by reducing the load on databases 
  or frequently accessed data sources. However, it doesn’t address the slow startup issue of the EC2 instances. Redis caching can help with 
  reducing latency for repeated requests but does not solve the underlying initialization delay during scaling events.</p>

  <p><strong>C) Configure an Auto Scaling step scaling policy with an EC2 instance warmup condition:</strong></p>
  <p><strong>Correct Answer.</strong></p>
  <p>Using an Auto Scaling step scaling policy with a warmup condition helps address the issue of slow EC2 instance startup time. 
  The warmup period ensures that new instances are fully initialized before they begin to serve traffic, preventing timeouts and 
  ensuring that the scaling process is efficient. This allows the application to better respond to traffic bursts without impacting 
  user experience. During the warmup period, the Auto Scaling group waits for instances to become ready before considering them 
  available for handling requests.</p>

  <p><strong>D) Configure Amazon CloudFront to use an Application Load Balancer as the origin:</strong></p>
  <p><strong>Incorrect.</strong></p>
  <p>While CloudFront is a content delivery network (CDN) designed to improve the performance of websites by caching static content 
  closer to the users, it does not address slow startup times of EC2 instances. CloudFront can offload traffic and reduce latency for static 
  content like images or videos, but it doesn't resolve the issue of slow application boot-up during scaling events. This is more 
  of a performance optimization strategy for static content, not dynamic request handling during instance startup.</p>
</div>
       <p><strong>Associated Domain: Design High performance architecture</strong></p>
</div>
    `,
  },
  {
    question: `
A company’s security team requires that all data stored in the cloud be encrypted at rest at 
all times using encryption keys stored on premises.
Which encryption options meet these requirements? (Select TWO.)
    `,
    options: [` Use server-side encryption with Amazon S3 managed encryption keys (SSE-S3)`, 
      `Use server-side encryption with AWS KMS managed encryption keys (SSE-KMS)`, 
      `Use server-side encryption with customer-provided encryption keys (SSE-C)`, 
      `Use client-side encryption to provide at-rest encryption`,
    `Use an AWS Lambda function invoked by Amazon S3 events to encrypt the data using the customer’s
keys`],
    correct: [2, 3],
    explanation: `
    <div>
  <p><strong>A) Configure a Network Load Balancer with a slow start configuration:</strong></p>
  <p><strong>Incorrect.</strong></p>
  <p>While a Network Load Balancer (NLB) with a slow start configuration can help manage instances that take time to warm up, this solution 
  is more appropriate for load balancing at the transport layer (Layer 4) with a focus on low latency, high-throughput applications. 
  It does not address the application's slow startup time directly. An NLB is not suitable for handling web applications with long 
  initialization periods where HTTP traffic is the main concern.</p>

  <p><strong>B) Configure Amazon ElastiCache for Redis to offload direct requests from the EC2 instances:</strong></p>
  <p><strong>Incorrect.</strong></p>
  <p>Amazon ElastiCache for Redis is used primarily for caching data to improve application performance by reducing the load on databases 
  or frequently accessed data sources. However, it doesn’t address the slow startup issue of the EC2 instances. Redis caching can help with 
  reducing latency for repeated requests but does not solve the underlying initialization delay during scaling events.</p>

  <p><strong>C) Configure an Auto Scaling step scaling policy with an EC2 instance warmup condition:</strong></p>
  <p><strong>Correct Answer.</strong></p>
  <p>Using an Auto Scaling step scaling policy with a warmup condition helps address the issue of slow EC2 instance startup time. 
  The warmup period ensures that new instances are fully initialized before they begin to serve traffic, preventing timeouts and 
  ensuring that the scaling process is efficient. This allows the application to better respond to traffic bursts without impacting 
  user experience. During the warmup period, the Auto Scaling group waits for instances to become ready before considering them 
  available for handling requests.</p>

  <p><strong>D) Configure Amazon CloudFront to use an Application Load Balancer as the origin:</strong></p>
  <p><strong>Incorrect.</strong></p>
  <p>While CloudFront is a content delivery network (CDN) designed to improve the performance of websites by caching static content 
  closer to the users, it does not address slow startup times of EC2 instances. CloudFront can offload traffic and reduce latency for static 
  content like images or videos, but it doesn't resolve the issue of slow application boot-up during scaling events. This is more 
  of a performance optimization strategy for static content, not dynamic request handling during instance startup.</p>

  <p><strong>Associated Domain: Design Secure Architectures</strong></p>
</div>

    `,
  },
  {
    question: 'What is 5 + 3?',
    options: ['5', '8', '12', '15'],
    correct: [1],
    explanation: 'you are dumb!',
  }
];
