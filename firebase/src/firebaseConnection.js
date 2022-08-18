// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWZG2GabhQ6dEExThFQeRNWLI85hIjrqI",
  authDomain: "curso-343fb.firebaseapp.com",
  projectId: "curso-343fb",
  storageBucket: "curso-343fb.appspot.com",
  messagingSenderId: "480478139545",
  appId: "1:480478139545:web:102b11f0fcb94cfebcd408",
  measurementId: "G-3GTMLYS6ED"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



export default app
