class RateLimiter {
  constructor(limit, time) {
    this.server = {
      limit,
      time,
      users: {},
      now: new Date(),
    };
  }

  allowRequest(userId) {
    if (!this.server.users[userId]) {
      const crt = new Date();
      this.server.users[userId] = { id: userId, requests: 1, time: crt };
      return true;
    } else {
      if (
        (this.server.users[userId].time - this.server.now) / 1000 >
          this.server.limit ||
        this.server.users[userId].requests > this.server.limit
      ) {
        return false;
      } else {
        this.server.users[userId].requests += 1;
        return true;
      }
    }
  }
}

const limiter = new RateLimiter(3, 5000); // Max 3 requests per 5 seconds

console.log(limiter.allowRequest("user1")); // true
console.log(limiter.allowRequest("user1")); // true
console.log(limiter.allowRequest("user1")); // true
console.log(limiter.allowRequest("user1")); // false (rate limit exceeded)

setTimeout(() => {
  console.log(limiter.allowRequest("user1")); // true (after timeout)
}, 5000);
