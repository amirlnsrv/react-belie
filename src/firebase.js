// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAoM3Ww_mgy5yALQpUt0hWMgEsRt-_hMk4",
  authDomain: "react-belie-37325.firebaseapp.com",
  projectId: "react-belie-37325",
  storageBucket: "react-belie-37325.appspot.com",
  messagingSenderId: "757546261025",
  appId: "1:757546261025:web:c30d767df1da1ce87d2160",
  measurementId: "G-XQ3LF95GSQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);