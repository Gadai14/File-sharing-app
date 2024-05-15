// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALU8xvrPq6Wge4KDTU9w9xT2oapZDH6_g",
  authDomain: "abhi-s-project-5cee4.firebaseapp.com",
  projectId: "abhi-s-project-5cee4",
  storageBucket: "abhi-s-project-5cee4.appspot.com",
  messagingSenderId: "905991043852",
  appId: "1:905991043852:web:6e167d1502f4c77ce06729",
  measurementId: "G-DRP0H96PS3"
};

// Initialize Firebase
// export const app = initializeApp(firebaseConfig);
// const db=getFirestore(app);

// export {db};
const app = initializeApp(firebaseConfig);

 export default app;