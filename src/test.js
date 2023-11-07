import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBMbUrsdiRXY5znhUyzLmkMIu1PT7tzfUQ",
    authDomain: "tymaterials-9fd09.firebaseapp.com",
    projectId: "tymaterials-9fd09",
    storageBucket: "tymaterials-9fd09.appspot.com",
    messagingSenderId: "885509719148",
    appId: "1:885509719148:web:3ef5dcc29d4f79f9a04449",
    measurementId: "G-TFST4F5H5C"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };