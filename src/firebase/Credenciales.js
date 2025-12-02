// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8hh-60R0q2RfOAQ5CFKNyyrF3eQNuaQo",
  authDomain: "econmmerce.firebaseapp.com",
  projectId: "econmmerce",
  storageBucket: "econmmerce.firebasestorage.app",
  messagingSenderId: "652545670040",
  appId: "1:652545670040:web:f0c9b2ff2fd257617749ed",
  measurementId: "G-K8P89PKDQD"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
 export const db = getFirestore(appFirebase);

export default appFirebase;