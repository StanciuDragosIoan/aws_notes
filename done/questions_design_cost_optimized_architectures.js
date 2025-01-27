/*

##### Question 1

1) A solutions architect wants to design a solution to save costs for Amazon EC2 instances that do not
need to run during a 2-week company shutdown. The applications running on the EC2 instances store
data in instance memory that must be present when the instances resume operation.
Which approach should the solutions architect recommend to shut down and resume the EC2 instances?

A) Modify the application to store the data on instance store volumes. Reattach the volumes while restarting
them.

B) Snapshot the EC2 instances before stopping them. Restore the snapshot after restarting the instances.

C) Run the applications on EC2 instances enabled for hibernation. Hibernate the instances before the 2-
week company shutdown.

D) Note the Availability Zone for each EC2 instance before stopping it. Restart the instances in the same
Availability Zones after the 2-week company shutdown.



Correct answer: C;


A) Modify the application to store the data on instance store volumes. Reattach the volumes while restarting them:
This option doesn't fully solve the problem because instance store volumes are ephemeral—they lose data when the 
instance is stopped or terminated. Therefore, the data would not persist during a shutdown.

B) Snapshot the EC2 instances before stopping them. Restore the snapshot after restarting the instances:
While snapshots can save data stored on EBS volumes, this approach does not address the data in instance memory. 
EC2 snapshots are designed to save data on disk (EBS), not in RAM.

C) Run the applications on EC2 instances enabled for hibernation. Hibernate the instances before the 
2-week company shutdown:

Correct Answer.

EC2 instances that are hibernated retain the contents of the instance's memory (RAM), and when resumed, the data is 
restored, allowing the application to pick up exactly where it left off. This approach saves costs, as hibernating 
the instance stops it while maintaining its state in memory. When the 2-week shutdown ends, the instance can be 
resumed, and all in-memory data will still be available.

D) Note the Availability Zone for each EC2 instance before stopping it. Restart the instances in the same Availability 
Zones after the 2-week company shutdown:
This option is not the best choice. While it is important to launch instances in the same Availability Zone for network 
latency reasons, stopping and starting an instance in the same Availability Zone would not preserve instance memory. 
The memory will be lost upon stopping the instance.





##### Question 2

6) A company uses Amazon EC2 Reserved Instances to run its data processing workload. The nightly job
typically takes 7 hours to run and must finish within a 10-hour time window. The company anticipates
temporary increases in demand at the end of each month that will cause the job to run over the time limit
with the capacity of the current resources. Once started, the processing job cannot be interrupted before
completion. The company wants to implement a solution that would provide increased resource capacity
as cost-effectively as possible.
What should a solutions architect do to accomplish this?

A) Deploy On-Demand Instances during periods of high demand.
B) Create a second EC2 reservation for additional instances.
C) Deploy Spot Instances during periods of high demand.
D) Increase the EC2 instance size in the EC2 reservation to support the increased workload.


Correct answer A;

Explanation:

A) Deploy On-Demand Instances during periods of high demand:

Correct Answer.

On-Demand Instances allow you to quickly scale up capacity to handle temporary spikes in demand. 
You pay for these instances only when they are running, which makes them a cost-effective choice 
for occasional, short-term needs.Since the processing job cannot be interrupted, On-Demand Instances 
are ideal because they are not preemptible like Spot Instances. This approach provides the flexibility 
to add capacity when needed without committing to long-term costs, fitting the scenario well.


B) Create a second EC2 reservation for additional instances:

Incorrect.

Reserved Instances are best suited for predictable, long-term workloads, not for temporary or seasonal demand.
Creating a second reservation for additional instances would lock the company into paying for those instances 24/7, 
even when they are not needed. This is not cost-effective for handling temporary spikes at the end of each month.

C) Deploy Spot Instances during periods of high demand:

Incorrect.

Spot Instances are the most cost-effective option but are not suitable for workloads that cannot be interrupted. 
AWS can reclaim Spot Instances with little notice, which would disrupt the processing job and potentially cause it to fail.

D) Increase the EC2 instance size in the EC2 reservation to support the increased workload:

Incorrect.

Increasing the instance size in the existing EC2 reservation might solve the performance issue, but it would permanently 
increase costs. This approach does not address the temporary nature of the increased demand and would waste resources
during periods of normal workload.


*/