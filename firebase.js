// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from 'firebase/auth'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlB89246edENsL_qSddSXRsDRs9qhLGL4",
  authDomain: "uber-clone-nxt.firebaseapp.com",
  projectId: "uber-clone-nxt",
  storageBucket: "uber-clone-nxt.appspot.com",
  messagingSenderId: "1067095898399",
  appId: "1:1067095898399:web:ea89ff948829b38115982a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider()
const auth = getAuth()

export { app, provider, auth }