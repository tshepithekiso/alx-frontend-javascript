function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Simulate an asynchronous operation using setTimeout
    setTimeout(() => {
      resolve("API response");
    }, 1000);
  });
}

export default getResponseFromAPI;

