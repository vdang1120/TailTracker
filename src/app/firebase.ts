import { initializeApp } from "firebase/app";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

// Fetch all image URLs from Firebase Storage
export const fetchFirebaseImages = async () => {
  const storageRef = ref(storage, "pets"); // Folder where images are stored
  const fileList = await listAll(storageRef);
  const urls = await Promise.all(fileList.items.map((item) => getDownloadURL(item)));
  return urls;
};
