// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-5ace3.firebaseapp.com",
  projectId: "mern-estate-5ace3",
  storageBucket: "mern-estate-5ace3.appspot.com",
  messagingSenderId: "41953870534",
  appId: "1:41953870534:web:4578041fa7709420488dc7",
  measurementId: "G-EL6TDCXEHX",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
