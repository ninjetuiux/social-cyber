import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

// Initialize Firebase
import { storage } from './firebase';

const uploadImage = async (image, userEmail) => {
    console.log('this is the image instance recieved in firebaseImageUpload: ', image)
    if (!image) return;
  
    // Create a storage reference
    const storageRef = ref(storage, `images/${userEmail}/${image.name}`);
    
    // Start the file upload
    const uploadTask = uploadBytesResumable(storageRef, image);
  
    // Return a promise that resolves with the download URL
    return new Promise((resolve, reject) => {
      uploadTask.on(
        "state_changed",
        null,
        (error) => {
          reject(error);
        },
        () => {
          // When the upload is complete, get the download URL
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            resolve(downloadURL);
          });
        }
      );
    });
  };
  export default uploadImage;