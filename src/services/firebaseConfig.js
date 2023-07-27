import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDx0jAWDVP-Qh0oqO3WLWV_UvYKEMdFmlw",
  authDomain: "react-firebase-de6a6.firebaseapp.com",
  projectId: "react-firebase-de6a6",
  storageBucket: "react-firebase-de6a6.appspot.com",
  messagingSenderId: "478848155574",
  appId: "1:478848155574:web:6fef1a427c0c23bfdc0b17"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);