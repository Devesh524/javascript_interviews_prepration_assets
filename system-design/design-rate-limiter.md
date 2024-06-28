# JS: Describe how you would implement a rate limiter for an API.

Rate limiter is a system to prevent abuse by limiting the number of requests a user can make in a given amount of time. It is used to protect the server from being overwhelmed by too many requests.

## There are two types of rate limiting:

1. **Token Bucket**: In this approach, the rate limiter keeps a bucket with a fixed capacity. Every request will consume a token from the bucket. If the bucket is empty, the request will be rejected. The bucket will be refilled at a constant rate.

2. **Sliding Window**: In this approach, we keep track of the number of requests in the last `n` seconds. If the number of requests exceeds the threshold, the request will be rejected.

## Token Bucket Algorithm

The token bucket algorithm is a rate limiting algorithm that is used to control the rate of requests sent or received by an API. It works by maintaining a bucket of tokens that are added to the bucket at a fixed rate. When a request is made, a token is removed from the bucket. If the bucket is empty, the request is rejected.

The token bucket algorithm has four main parameters:

1. **Capacity**: The maximum number of tokens that the bucket can hold.
2. **Rate**: The rate at which tokens are added to the bucket.
3. **Tokens**: The number of tokens currently in the bucket.
4. **Last Refill Time**: The time when the bucket was last refilled.

## Implementation

Here is a simple implementation of a token bucket rate limiter in JS:

```javascript
class RateLimiter {
  constructor(capacity, rate) {
    this.capacity = capacity;
    this.rate = rate;
    this.tokens = capacity;
    this.lastRefillTime = Date.now();
  }

  refill() {
    const now = Date.now();
    const elapsed = now - this.lastRefillTime;
    const tokensToAdd = (elapsed * this.rate) / 1000;
    this.tokens = Math.min(this.capacity, this.tokens + tokensToAdd);
    this.lastRefillTime = now;
  }

  consume() {
    if (this.tokens < 1) {
      return false;
    }
    this.tokens--;
    return true;
  }
}

const limiter = new RateLimiter(10, 1); // 10 requests per second

setInterval(() => {
  limiter.refill();
}, 1000);

function makeRequest() {
  if (limiter.consume()) {
    console.log('Request processed');
  } else {
    console.log('Request rejected');
  }
}

makeRequest();
```

In this implementation, we have a `RateLimiter` class that takes the `capacity` and `rate` as parameters. The `refill` method refills the bucket with tokens at a constant rate. The `consume` method consumes a token from the bucket when a request is made. We create an instance of the `RateLimiter` class with a capacity of 10 and a rate of 1 token per second. We then call the `makeRequest` function to make a request, which will either be processed or rejected based on the availability of tokens in the bucket.

This is a basic implementation of a token bucket rate limiter in JavaScript. There are more advanced implementations that can handle multiple users, distributed systems, and other scenarios.

## Conclusion

Rate limiting is an important technique for protecting APIs from abuse and ensuring fair usage. The token bucket algorithm is a simple and effective way to implement rate limiting in an API. By using a token bucket rate limiter, you can control the rate of requests made to your API and prevent it from being overwhelmed by too many requests.

Rate limiting can be implemented in various ways, such as token bucket, sliding window, and other algorithms. Each approach has its own advantages and disadvantages, and the choice of algorithm will depend on the specific requirements of your API.

Rate limiting is an essential part of API design and should be considered when building any API that is exposed to the public or used by multiple clients. By implementing rate limiting, you can protect your API from abuse, ensure fair usage, and provide a better experience for your users.

### Resources

- [Rate Limiting Algorithms in Distributed Systems](https://medium.com/system-design-blog/rate-limiting-algorithms-in-distributed-systems-9775b5e2890a)
- [Rate Limiting in Node.js](https://blog.logrocket.com/rate-limiting-node-js/)
- [Rate Limiting in Express.js](https://expressjs.com/en/guide/behind-proxies.html#rate-limiting)

#JS #SystemDesign #RateLimiter #API #TokenBucket #SlidingWindow

## Sliding Window Algorithm

The sliding window algorithm is a rate limiting algorithm that is used to control the rate of requests sent or received by an API. It works by keeping track of the number of requests made in the last `n` seconds. If the number of requests exceeds the threshold, the request is rejected.

The sliding window algorithm has two main parameters:

1. **Request count**: The number of requests made in the last `n` seconds.
2. **Request limit**: The maximum number of requests allowed in `n` seconds.
3. **Window size**: The time window in which the requests are counted.
4. **Requests**: An array of timestamps of the requests made in the window.

The sliding window algorithm works by maintaining a window of `n` seconds and a counter of the number of requests made in that window. When a request is made, the counter is incremented. If the counter exceeds the threshold, the request is rejected.

Here is a simple implementation of a sliding window rate limiter in JS:

```javascript
class RateLimiter {
  constructor(limit, interval) {
    this.limit = limit;
    this.interval = interval;
    this.requests = [];
  }

  consume() {
    const now = Date.now();
    this.requests = this.requests.filter((time) => time > now - this.interval);
    if (this.requests.length < this.limit) {
      this.requests.push(now);
      return true;
    }
    return false;
  }
}

const limiter = new RateLimiter(10, 1000); // 10 requests per second

function makeRequest() {
  if (limiter.consume()) {
    console.log('Request processed');
  } else {
    console.log('Request rejected');
  }
}

makeRequest();
```

In this implementation, we have a `RateLimiter` class that takes the `limit` and `interval` as parameters. The `consume` method filters out the requests that are older than the interval and checks if the number of requests is less than the limit. If the number of requests is less than the limit, the request is processed, and the current time is added to the requests array. If the number of requests exceeds the limit, the request is rejected.

This is a basic implementation of a sliding window rate limiter in JavaScript. There are more advanced implementations that can handle multiple users, distributed systems, and other scenarios.

## Conclusion

Rate limiting is an important technique for protecting APIs from abuse and ensuring fair usage. The sliding window algorithm is a simple and effective way to implement rate limiting in an API. By using a sliding window rate limiter, you can control the rate of requests made to your API and prevent it from being overwhelmed by too many requests.

Rate limiting can be implemented in various ways, such as token bucket, sliding window, and other algorithms. Each approach has its own advantages and disadvantages, and the choice of algorithm will depend on the specific requirements of your API.

Rate limiting is an essential part of API design and should be considered when building any API that is exposed to the public or used by multiple clients. By implementing rate limiting, you can protect your API from abuse, ensure fair usage, and provide a better experience for your users.

### Resources

- [Rate Limiting Algorithms in Distributed Systems](https://medium.com/system-design-blog/rate-limiting-algorithms-in-distributed-systems-9775b5e2890a)
- [Rate Limiting in Node.js](https://blog.logrocket.com/rate-limiting-node-js/)
- [Rate Limiting in Express.js](https://expressjs.com/en/guide/behind-proxies.html#rate-limiting)
