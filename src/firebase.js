// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMbUrsdiRXY5znhUyzLmkMIu1PT7tzfUQ",
  authDomain: "tymaterials-9fd09.firebaseapp.com",
  projectId: "tymaterials-9fd09",
  storageBucket: "tymaterials-9fd09.appspot.com",
  messagingSenderId: "885509719148",
  appId: "1:885509719148:web:3ef5dcc29d4f79f9a04449",
  measurementId: "G-TFST4F5H5C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();


export {auth, app, provider};