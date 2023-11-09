// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCB_eKvBUgDCkX0-5rNRXVpdYb3eyKO5v8",
  authDomain: "dragon-news-authentication-123.firebaseapp.com",
  projectId: "dragon-news-authentication-123",
  storageBucket: "dragon-news-authentication-123.appspot.com",
  messagingSenderId: "850404612151",
  appId: "1:850404612151:web:0d8fcea2512010bb7347b2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;