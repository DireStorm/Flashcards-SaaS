// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDAl_cnlRv5fSShohaFPp_4vGHRj2zAc1M",
    authDomain: "flashcardssaas-55ffb.firebaseapp.com",
    projectId: "flashcardssaas-55ffb",
    storageBucket: "flashcardssaas-55ffb.appspot.com",
    messagingSenderId: "967246876953",
    appId: "1:967246876953:web:71d066f285846ff1c07588",
    measurementId: "G-HKPPD7ZQY9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)

export {db}