/*

##### Question 1


1) An analytics company is planning to offer a web analytics service to its users. The service 
will require that the users’ webpages include a JavaScript script that makes authenticated GET 
requests to the company’s Amazon S3 bucket.
What must a solutions architect do to ensure that the script will successfully execute?

A) Enable cross-origin resource sharing (CORS) on the S3 bucket.
B) Enable S3 Versioning on the S3 bucket.
C) Provide the users with a signed URL for the script.
D) Configure an S3 bucket policy to allow public execute privileges


Correct answer is A;


Explanation


Explanation:
The scenario describes a web analytics service where users include a JavaScript script on their 
webpages. This script makes authenticated GET requests to an Amazon S3 bucket. The primary concern 
here is ensuring that the JavaScript can successfully execute and access the S3 resources 
(e.g., images, scripts, etc.) from a different origin (the users' webpages) without encountering 
cross-origin restrictions.

Here’s why A is the correct answer:

A) Enable cross-origin resource sharing (CORS) on the S3 bucket:
Correct Answer. Cross-Origin Resource Sharing (CORS) is a mechanism that allows resources 
(like JavaScript, images, fonts, etc.) hosted on one domain to be requested by a web page 
hosted on a different domain.

Since the JavaScript script from the users' webpages will be making requests to the S3 bucket 
(which is hosted on a different domain or origin), the browser will block these requests by 
default due to same-origin policy restrictions.

Enabling CORS on the S3 bucket will allow the JavaScript to successfully make cross-origin 
requests to the S3 bucket. The CORS configuration will define which HTTP methods (e.g., GET) 
and headers are allowed for requests from the different origin (users' webpages).

Why the other options are incorrect:

B) Enable S3 Versioning on the S3 bucket:

Enabling S3 Versioning is useful for keeping multiple versions of objects in a bucket, but it does not 
impact cross-origin access or allow the JavaScript script to make requests. It is unrelated to the 
web-based authentication or execution scenario described in the question.

C) Provide the users with a signed URL for the script:

A signed URL would allow access to a specific object in the S3 bucket with temporary credentials, 
but this is not required for enabling cross-origin requests. Signed URLs are typically used for 
temporary access to private S3 objects, not for allowing cross-origin access for JavaScript scripts.

D) Configure an S3 bucket policy to allow public execute privileges:

Configuring the S3 bucket policy to allow public execute privileges is risky and unnecessary. 
While it would technically allow users to execute requests, it would expose the S3 bucket to the 
public, which might violate security and privacy requirements. The focus should be on enabling 
CORS and providing access through proper means, not by making the bucket publicly accessible.

Associated Domain:

This question belongs to Domain 1: Design Secure Architectures and Domain 3: Design High-Performing 
Architectures. 

Here's why:

Security Aspect: CORS is essential for securing cross-origin requests, which is a fundamental 
part of web security when accessing S3 resources from other domains. Performance Aspect: By properly 
configuring CORS, you ensure that the JavaScript script from the users' webpages can execute without 
unnecessary redirects or errors, contributing to better performance.In your original classification, 
Domain 1 would be more accurate because the focus is on ensuring secure and proper access to S3 
resources from the user's webpage.





#### Question 2

A tech company has a CRM application hosted on an Auto Scaling group of On-Demand EC2 instances with different instance types and sizes. 
The application is extensively used during office hours from 9 in the morning to 5 in the afternoon. Their users are complaining that the 
performance of the application is slow during the start of the day but then works normally after a couple of hours.

Which of the following is the MOST operationally efficient solution to implement to ensure the application works properly at the 
beginning of the day?

A) Configure a Dynamic scaling policy for the Auto Scaling group to launch new instances based on the CPU utilization.
B) Configure a Dynamic scaling policy for the Auto Scaling group to launch new instances based on the Memory utilization.
C) Configure a Scheduled scaling policy for the Auto Scaling group to launch new instances before the start of the day.
D) Configure a Predictive scaling policy for the Auto Scaling group to automatically adjust the number of Amazon EC2 instances

correct answer D


explanations:
 
Predictive scaling uses machine learning to analyze historical usage patterns and predicts future demand. It proactively adjusts the 
number of instances to ensure the application has the necessary capacity before the demand spike occurs.

This approach is more operationally efficient because it dynamically adapts to changes in demand patterns over time, without requiring 
manual schedule updates.

Predictive scaling ensures optimal performance at the start of the day and throughout the day while minimizing manual effort and 
maintaining cost efficiency.







###### Question 3

An application running on AWS uses an Amazon Aurora Multi-AZ DB cluster deployment for its
database. When evaluating performance metrics, a solutions architect discovered that the database 
reads are causing high I/O and adding latency to the write requests against the database.

What should the solutions architect do to separate the read requests from the write requests?

A) Enable read-through caching on the Aurora database.
B) Update the application to read from the Multi-AZ standby instance.
C) Create an Aurora replica and modify the application to use the appropriate endpoints.
D) Create a second Aurora database and link it to the primary database as a read replica.


Correct answer C;

explanations:

A) Enable read-through caching on the Aurora database:

Incorrect.

Aurora does not support "read-through caching" as a native feature. While you can implement caching 
using Amazon ElastiCache (e.g., Redis or Memcached) to offload frequent reads, this is not a direct 
Aurora feature. Additionally, the question does not mention frequent repeated reads that would benefit 
from caching—it focuses on separating reads from writes.

B) Update the application to read from the Multi-AZ standby instance:

Incorrect.

The Multi-AZ standby instance in Aurora is meant for disaster recovery (failover) and is not 
available for serving read traffic. Reads cannot be directed to the standby instance.

C) Create an Aurora replica and modify the application to use the appropriate endpoints:

Correct.

Creating Aurora replicas is the recommended way to handle high read traffic. Aurora allows you to:
Create up to 15 replicas within a cluster.
Use the cluster endpoint for writes and the reader endpoint for reads. This separates read and 
write traffic effectively.

By modifying the application to use the reader endpoint, read requests are directed to replicas, 
reducing I/O on the primary instance.

D) Create a second Aurora database and link it to the primary database as a read replica:

Incorrect.

This approach is unnecessary and inefficient because Aurora supports built-in replication 
within the same cluster. Creating an entirely new database for read replication increases 
complexity and cost.

*/