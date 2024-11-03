// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "event-management-11d29.firebaseapp.com",
  projectId: "event-management-11d29",
  storageBucket: "event-management-11d29.appspot.com",
  messagingSenderId: "962948890197",
  appId: "1:962948890197:web:3bb6c1ad7c24fec4369edc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
