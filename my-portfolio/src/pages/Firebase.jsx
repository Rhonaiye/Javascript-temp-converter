


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0amvQ6Yw14kDSrp957Y4wyJx4Ul0DeuE",
  authDomain: "authentication-91ba1.firebaseapp.com",
  projectId: "authentication-91ba1",
  storageBucket: "authentication-91ba1.appspot.com",
  messagingSenderId: "939003855897",
  appId: "1:939003855897:web:5a01ca89f6734e97cf5688",
  measurementId: "G-CQ5WJKMFMR"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const database = getFirestore(app)

export const auth = getAuth();

