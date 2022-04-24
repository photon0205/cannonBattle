// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7ne0LD3U8RCE97zndPXSwmWnNjYcYrpw",
  authDomain: "cannonbattle-85205.firebaseapp.com",
  projectId: "cannonbattle-85205",
  storageBucket: "cannonbattle-85205.appspot.com",
  messagingSenderId: "142236860159",
  appId: "1:142236860159:web:922e4b0296db52934456ca",
  measurementId: "G-3PVBRG86YD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);