export default function uploadPhoto(filename) {
  return new Promise((resolve, reject) => {
    if (filename) {
      resolve({
        status: 200,
        body: `${filename} was uploaded`,
      });
    } else {
      reject(new Error('File name required'));
    }
  });
}
