import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhupgGsRsNXQJTqTPpxkxeQ9mMVsGCk-g",
  authDomain: "paliativo-ecc56.firebaseapp.com",
  projectId: "paliativo-ecc56",
  storageBucket: "paliativo-ecc56.appspot.com",
  messagingSenderId: "1091648212769",
  appId: "1:1091648212769:web:0c5698e3127f6c5ed2b860",
  measurementId: "G-DP7Q8M8XMS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
