const quizData = [
  {
    question: 'What is the AWS Free Tier?',
    options: [
      'A permanent free version of all AWS services',
      'A set of more than 100 AWS products that offer free usage for a limited time or always',
      'A program that provides free AWS training and certifications',
      'A discount program for startups using AWS'
    ],
    correct: [1],
    explanation: 'AWS Free Tier offers over 100 products with different levels of free usage: 12 months free, always free, or limited-time trials.'
  },
  {
    question: 'Which of the following is NOT a category of AWS Free Tier products?',
    options: [
      'Compute',
      'Database',
      'Networking hardware',
      'Machine Learning'
    ],
    correct: [2],
    explanation: 'AWS Free Tier includes Compute, Database, Storage, Serverless, and ML products, but AWS does not offer free networking hardware.'
  },
  {
    question: 'How long do some AWS Free Tier products remain free?',
    options: [
      'Only for the first month',
      'For 6 months',
      '12 months for some products, always free for others, and shorter trials for a few',
      'Only during promotional periods'
    ],
    correct: [2],
    explanation: 'AWS Free Tier has different durations: 12 months for some services, always free for others, and short-term trials for select services.'
  },
  {
    question: 'Which of the following AWS services is included in the Free Tier?',
    options: [
      'EC2 (Compute)',
      'RDS (Database)',
      'S3 (Storage)',
      'All of the above'
    ],
    correct: [3],
    explanation: 'AWS Free Tier includes multiple services across different categories, including EC2, RDS, and S3.'
  },
  {
    question: 'What is the AWS Pricing Calculator used for?',
    options: [
      'Managing AWS billing and payments',
      'Estimating the cost of AWS services based on usage',
      'Comparing AWS prices with other cloud providers',
      'Applying discounts to AWS services'
    ],
    correct: [1],
    explanation: 'The AWS Pricing Calculator helps users estimate costs for AWS services based on their projected usage.'
  },
  {
    question: 'Can the AWS Pricing Calculator estimate costs for all AWS services?',
    options: [
      'Yes, it provides cost estimates for any AWS service',
      'No, it only estimates costs for EC2 and S3',
      'No, it is limited to compute and database services',
      'No, it requires an AWS subscription to access'
    ],
    correct: [0],
    explanation: 'The AWS Pricing Calculator can estimate costs for any AWS service, helping users plan their expenses.'
  },
  {
    question: 'Which factor affects the estimated cost in the AWS Pricing Calculator?',
    options: [
      'The number of AWS certifications you have',
      'The number of AWS accounts you create',
      'Your usage of AWS services',
      'Your geographic location only'
    ],
    correct: [2],
    explanation: 'The AWS Pricing Calculator bases its estimates on the specific AWS services used and the expected usage volume.'
  },
  {
    question: 'Why is the AWS Pricing Calculator useful for architects and developers?',
    options: [
      'It helps them estimate costs before deploying infrastructure',
      'It provides technical documentation for AWS services',
      'It automatically applies discounts to AWS accounts',
      'It replaces the need for financial planning in cloud projects'
    ],
    correct: [0],
    explanation: 'The AWS Pricing Calculator is useful for estimating costs before deploying infrastructure, helping architects and developers plan budgets.'
  }
];



/*

Aws free tier and Pricing Calculator

Free tier

AWS offers more than 100 products it its free tier

Main categories of product: compute (e.g. EC2), database (RDS), storage (S3), containers, web and mobile
apps, serverless, Machine Learning

Some Products are 12 months free, others are always free and some offer a shorter trial period

AWS Pricing Calculator

Estimates the cost for your architecture (it can estimate for any type of service and give you an estimative
calculation for the costs per usage)

 
*/