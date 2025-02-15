//imple 1

// class JobScheduler {
//   jobs = {};
//   scheduleJob(job, time) {
//     setTimeout(job, time);
//     return () => {
//       //   const id = `${time}`;
//       if (!this.jobs[job]) {
//         this.jobs[id] = job;
//       }
//     };
//   }

//   cancelJob(jobToCancel) {
//     if (this.jobs[jobToCancel]) {
//       clearTimeout(this.jobs[jobToCancel]);
//     }
//   }

//   runNow(jobId) {
//     // const jobToRun = this.jobs.find((i) => i === jobId);
//     // if (jobToRun) {
//     //   jobToRun();
//     // }
//   }
// }

// const scheduler = new JobScheduler();

// const jobId = scheduler.scheduleJob(() => {
//   console.log("Job executed after 2 seconds");
// }, 2000);

// scheduler.scheduleJob(() => {
//   console.log("This job runs after 1 second");
// }, 1000);

// // Cancel the first job before it executes
// scheduler.cancelJob(jobId);

// setTimeout(() => {
//   scheduler.runNow(jobId); // This should NOT execute, since we canceled it
// }, 2500);

//sample

class JobScheduler {
  constructor() {
    this.jobs = {}; // Store jobs as { jobId: { timeoutId, jobFunction } }
  }

  scheduleJob(job, delay) {
    const jobId = `job-${Date.now()}-${Math.random()}`; // Generate unique job ID

    const timeoutId = setTimeout(() => {
      job(); // Execute job
      delete this.jobs[jobId]; // Clean up after execution
    }, delay);

    this.jobs[jobId] = { timeoutId, jobFunction: job }; // Store job metadata
    return jobId; // Return job ID for tracking
  }

  cancelJob(jobId) {
    if (this.jobs[jobId]) {
      clearTimeout(this.jobs[jobId].timeoutId); // Cancel the timeout
      delete this.jobs[jobId]; // Remove from storage
      console.log(`Job ${jobId} canceled`);
    }
  }

  runNow(jobId) {
    if (this.jobs[jobId]) {
      const { jobFunction } = this.jobs[jobId];
      jobFunction(); // Execute job immediately
      clearTimeout(this.jobs[jobId].timeoutId); // Cancel scheduled execution
      delete this.jobs[jobId]; // Remove from storage
      console.log(`Job ${jobId} executed manually`);
    }
  }
}

// Example Usage
const scheduler = new JobScheduler();

const jobId1 = scheduler.scheduleJob(() => {
  console.log("Job executed after 2 seconds");
}, 2000);

const jobId2 = scheduler.scheduleJob(() => {
  console.log("This job runs after 1 second");
}, 1000);

console.log(`Scheduled jobs:`, Object.keys(scheduler.jobs));

// Cancel the first job before it executes
scheduler.cancelJob(jobId1);

setTimeout(() => {
  scheduler.runNow(jobId1); // Should NOT execute, since we canceled it
}, 2500);
