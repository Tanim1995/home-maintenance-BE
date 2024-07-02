// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAatXDJCAg1bgPV38YtnHZIhci33NbOJVE",
  authDomain: "my-app-b5de5.firebaseapp.com",
  projectId: "my-app-b5de5",
  storageBucket: "my-app-b5de5.appspot.com",
  messagingSenderId: "188453762869",
  appId: "1:188453762869:web:cdaf1ba8c37c33a3a0be7c",
  measurementId: "G-L6RW01CZ6K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
//initialize Firestore
const db = getFirestore(app)
//initialize Auth module
const auth = getAuth(app)

export { db,app,auth };