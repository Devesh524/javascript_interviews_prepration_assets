// Define the options for the circuit breaker
const CircuitBreaker = require("opossum");
const axios = require("axios");

// Define the function that will be called by the circuit breaker
const axiosRequest = async (config) => {
  try {
    const response = await axios(config);
    return response.data;
  } catch (error) {
    throw new Error(`Request failed with error ${error}`);
  }
};

// Define the options for the circuit breaker
const options = {
  resetTimeout: 5000,
  errorThresholdPercentage: 50,
  fallback: (config) => {
    console.log("Circuit breaker: Fallback function called");
    return axiosRequest(config);
  },
  cache: {
    enabled: true,
    maxAge: 60000,
    max: 100,
  },
};

// Create a new circuit breaker
const circuitBreaker = new CircuitBreaker(axiosRequest, options);

// Listen to various events and log them accordingly
const logger = (event, data) => {
  console.log(`Circuit breaker: ${event} - ${JSON.stringify(data)}`);
};

circuitBreaker.on("success", (result) => {
  logger("Request succeeded", result);
});

circuitBreaker.on("failure", (error) => {
  logger("Request failed", error);
});

circuitBreaker.on("timeout", () => {
  logger("Request timed out");
});

circuitBreaker.on("fallback", (result) => {
  logger("Fallback function called", result);
});

circuitBreaker.on("open", () => {
  logger("Circuit opened");
});

circuitBreaker.on("halfOpen", () => {
  logger("Circuit half-opened");
});

circuitBreaker.on("close", () => {
  logger("Circuit closed");
});

// Export the circuit breaker for use in other modules
module.exports = circuitBreaker;
