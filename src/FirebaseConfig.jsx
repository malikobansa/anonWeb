import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, GoogleAuthProvider, getRedirectResult, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  // ...
  apiKey: "AIzaSyB0qRrCNyAhVH_toseozOQuduvYcCegbkk",
  authDomain: "anon-faf03.firebaseapp.com",
  projectId: "anon-faf03",
  storageBucket: "anon-faf03.appspot.com",
  messagingSenderId: "143323820222",
  appId: "1:143323820222:web:a3d6c57921721a0421aeef",
  measurementId: "G-EK5HC4G3EM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();


// Initialize Firebase Authentication and get a reference to the service
export {
  auth,
  provider,
  app,
  signInWithRedirect,
  getRedirectResult,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
};
