// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4ghktUL1d7NL-8SoPeB75aozWug_aseI",
  authDomain: "netflix-gpt-8c281.firebaseapp.com",
  projectId: "netflix-gpt-8c281",
  storageBucket: "netflix-gpt-8c281.appspot.com",
  messagingSenderId: "167534122691",
  appId: "1:167534122691:web:b98403eeb89fe0fc3c3476",
  measurementId: "G-L3QTTBH05H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();