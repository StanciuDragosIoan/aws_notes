/*

5) A company’s security team requires that all data stored in the cloud be encrypted at rest at 
all times using encryption keys stored on premises.
Which encryption options meet these requirements? (Select TWO.)

A) Use server-side encryption with Amazon S3 managed encryption keys (SSE-S3).
B) Use server-side encryption with AWS KMS managed encryption keys (SSE-KMS).
C) Use server-side encryption with customer-provided encryption keys (SSE-C).
D) Use client-side encryption to provide at-rest encryption.
E) Use an AWS Lambda function invoked by Amazon S3 events to encrypt the data using the customer’s
keys


correct answer C and D

Explanations:

Why the Correct Answers are C and D:

C) Use server-side encryption with customer-provided encryption keys (SSE-C):

SSE-C allows customers to provide their own encryption keys to AWS, which means 
that the encryption keys remain under the customer's control and can be stored 
on-premises.

AWS does not store the keys but uses them to encrypt and decrypt data as needed. 
This directly satisfies the requirement for encryption keys to be stored on-premises.

D) Use client-side encryption to provide at-rest encryption:

In client-side encryption, the customer encrypts the data before uploading it to the cloud. 
The encryption keys are fully managed and stored on-premises by the customer. AWS simply stores 
the already-encrypted data without managing or accessing the keys.

This option ensures that the data is encrypted at rest, and the keys are stored exclusively 
on-premises, meeting the security requirements.

Why the Other Options are Incorrect:

A) Use server-side encryption with Amazon S3 managed encryption keys (SSE-S3):

SSE-S3 uses encryption keys managed by AWS. This means the keys are not stored on-premises,
so it does not meet the requirement that encryption keys be customer-managed and stored on-premises.

B) Use server-side encryption with AWS KMS managed encryption keys (SSE-KMS):
SSE-KMS uses encryption keys managed by the AWS Key Management Service (KMS). While you can use 
customer-managed keys within KMS, those keys are stored in AWS, not on-premises, so this option 
does not meet the requirement.

E) Use an AWS Lambda function invoked by Amazon S3 events to encrypt the data using the customer’s 
keys:While it's possible to create a Lambda function that encrypts data using customer-provided keys, 
this is a complex and unnecessary custom solution for the described use case. Both SSE-C and client-side 
encryption are simpler and better-supported options that directly address the requirement.


*/