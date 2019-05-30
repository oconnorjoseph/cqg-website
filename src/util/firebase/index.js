/**
 * Initializes firebase, firestore, & firebase storage
 * to work with the cqg-website firebase project
 */

import firebase from "firebase/app";
import "firebase/functions";
import "firebase/firestore";
import "firebase/firebase-storage";

// ***** Initialize Firebase *****
// Configuration for the cqg-website app
const CONFIG = {
  apiKey: "AIzaSyDxBwN4gD402b2ltvIC7P64NVn4zxkHRIw",
  authDomain: "cqg-website.firebaseapp.com",
  databaseURL: "https://cqg-website.firebaseio.com",
  projectId: "cqg-website",
  storageBucket: "cqg-website.appspot.com",
  messagingSenderId: "343180631287",
  appId: "1:343180631287:web:f91956e5788deefc"
};
firebase.initializeApp(CONFIG);
export { firebase };

// ***** Initialize Firestore *****
const firestore = firebase.firestore();
// Enable offline persistence between multiple tabs
firestore.enablePersistence({ synchronizeTabs: true });
export { firestore };

// ***** Initialize Firebase Cloud Functions *****
const firebaseFunctions = firebase.functions();
export { firebaseFunctions };

// ***** Initialize Firebase Storage *****
const firebaseStorage = firebase.storage();
export { firebaseStorage };
