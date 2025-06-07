import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  // apiKey: import.meta.env.VITE_API_KEY,
  // authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  // projectId: import.meta.env.VITE_PROJECT_ID,
  // storageBucket: import.meta.env.VITE_STORAGE_BUCKET,n
  // messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  // appId: import.meta.env.VITE_APP_ID,
  apiKey: "AIzaSyDdWhjerbHHrndK2c9Jt5KC_rRUjGimJyY",
  authDomain: "cn-irctc-8ff3d.firebaseapp.com",
  projectId: "cn-irctc-8ff3d",
  storageBucket: "cn-irctc-8ff3d.firebasestorage.app", 
  messagingSenderId: "199306325672",
  appId: "1:199306325672:web:25b88799d3b96cdfaedc9d"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { db, auth, googleProvider };  
