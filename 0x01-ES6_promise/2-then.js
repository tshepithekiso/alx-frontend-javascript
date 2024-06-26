function handleResponseFromAPI(promise) {
  return promise
    .then(() => {
      console.log('Got a response from the API');
      return {
        status: 200,
        body: 'success',
      }; // Added a trailing comma here
    })
    .catch(() => {
      console.log('Got a response from the API');
      return new Error();
    });
}
export default handleResponseFromAPI;
