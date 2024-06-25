export default function handleResponseFromAPI(promise) {
  promise.then(() => {
    console.log('Got a response from the API');
  }).catch(() => {
    console.error('An error occurred');
  }).finally(() => {
    console.log('Always executed');
  });

  return {
    status: 200,
    body: 'success', // Added a trailing comma here
  }; // Added a trailing comma here
}
