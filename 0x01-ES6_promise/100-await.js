import { uploadPhoto, createUser } from './utils.js';

async function asyncUploadUser() {
  try {
    const photoPromise = uploadPhoto('photo-profile-1');
    const userPromise = createUser();

    const [photoResponse, userResponse] = await Promise.all([photoPromise, userPromise]);

    return {
      photo: photoResponse,
      user: userResponse
    };
  } catch (error) {
    console.error('Error in asyncUploadUser:', error);
    return {
      photo: null,
      user: null
    };
  }
}

export default asyncUploadUser;

