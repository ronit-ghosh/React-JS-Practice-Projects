// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAB8Nyn_hBqimcoucN2bQUMqEtjw_M9EHs",
  authDomain: "contact-app-e4c1f.firebaseapp.com",
  projectId: "contact-app-e4c1f",
  storageBucket: "contact-app-e4c1f.appspot.com",
  messagingSenderId: "700145594578",
  appId: "1:700145594578:web:c7361901347afa5accbd0b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);