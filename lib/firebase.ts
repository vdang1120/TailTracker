// firebase.ts (or firebase.js)
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL, listAll, StorageReference } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrTIwgHaiIR7QXWBtm06AJlrFS74CXTkw",
  authDomain: "tailtracker-e6fe5.firebaseapp.com",
  projectId: "tailtracker-e6fe5",
  storageBucket: "tailtracker-e6fe5.firebasestorage.app",
  messagingSenderId: "974362160626",
  appId: "1:974362160626:web:88154fcdf5b8a8c25c8f6b",
  measurementId: "G-NRZNM5MXJG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

// Function to upload an image to Firebase Storage
export const uploadImage = async (file: File) => {
  try {
    // Create a unique filename to avoid conflicts
    const timestamp = Date.now();
    const uniqueFilename = `${timestamp}_${file.name}`;
    
    const storageRef = ref(storage, 'images/' + uniqueFilename);
    await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(storageRef);
    console.log('File uploaded successfully:', downloadURL);
    return downloadURL;
  } catch (error) {
    console.error('Error uploading image:', error);
    throw new Error('Failed to upload image. Please try again.');
  }
};

export const fetchFirebaseImages = async () => {
  try {
    const imagesRef = ref(storage, 'images/');
    const result = await listAll(imagesRef);
    console.log('Found items in storage:', result.items.length);
    
    // Get download URLs for all images
    const urls = await Promise.all(
      result.items.map(async (item: StorageReference) => {
        try {
          const url = await getDownloadURL(item);
          // Add cache-busting parameter properly
          const urlWithCache = url.includes('?') 
            ? `${url}&t=${Date.now()}`
            : `${url}?t=${Date.now()}`;
          console.log('Successfully fetched URL for:', item.name);
          return urlWithCache;
        } catch (error) {
          console.error('Error getting download URL for:', item.name, error);
          return null;
        }
      })
    );

    // Filter out any failed URLs
    const validUrls = urls.filter((url): url is string => url !== null);
    console.log('Successfully fetched URLs:', validUrls.length);
    return validUrls;
  } catch (error) {
    console.error('Error fetching images:', error);
    return [];
  }
};

