// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsDUCCeqyKbcOjDcVBQB_XqZ_zwwz-S0A",
  authDomain: "job-portal-system-sltmobitel.firebaseapp.com",
  projectId: "job-portal-system-sltmobitel",
  storageBucket: "job-portal-system-sltmobitel.appspot.com",
  messagingSenderId: "851074836402",
  appId: "1:851074836402:web:7f671c8a3f7785959c66ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;