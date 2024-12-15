// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBq1_U71H84_jDnJdczILf3eqsLXl5KLgQ",
  authDomain: "login-7bc7f.firebaseapp.com",
  projectId: "login-7bc7f",
  storageBucket: "login-7bc7f.firebasestorage.app",
  messagingSenderId: "181525616738",
  appId: "1:181525616738:web:95fba235296b2df70cd93b"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase;