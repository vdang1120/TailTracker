// firebase.ts (or firebase.js)
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

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
  const storageRef = ref(storage, 'images/' + file.name); // Firebase Storage path
  await uploadBytes(storageRef, file); // Upload file to Firebase Storage
  const downloadURL = await getDownloadURL(storageRef); // Get the download URL of the uploaded file
  console.log('File available at', downloadURL); // Log the URL for debugging
  return downloadURL; // Return the download URL
};

