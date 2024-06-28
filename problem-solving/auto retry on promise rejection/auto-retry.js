/**
 * @param {() => Promise<any>} fetcher
 * @param {number} maximumRetryCount
 * @return {Promise<any>}
 */

function fetchWithAutoRetry(fetcher, maximumRetryCount) {
  // your code here
  console.log('fetchWithAutoRetry', maximumRetryCount);
  if (maximumRetryCount === 0) {
    return fetcher();
  }
  return fetcher().catch((error) => {
    if (maximumRetryCount === 0) {
      return Promise.reject(error);
    }

    return fetchWithAutoRetry(fetcher, maximumRetryCount - 1);
  });
}

// Test case 1

const fetcher1 = () => {
  return Promise.resolve('success');
};

fetchWithAutoRetry(fetcher1, 3).then(console.log); // success

// Test case 2

const fetcher2 = () => {
  return Promise.reject('error');
};

fetchWithAutoRetry(fetcher2, 3).catch(console.log); // error
