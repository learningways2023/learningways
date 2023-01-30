import {firebase} from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyDA9b5NLl92Wm1k29YZ2rRg7wfPm8POY3I",
  authDomain: "learning-ways-b36e9.firebaseapp.com",
  projectId: "learning-ways-b36e9",
  storageBucket: "learning-ways-b36e9.appspot.com",
  messagingSenderId: "269283875815",
  appId: "1:269283875815:web:122bcf723d06baccfd3b42",
  measurementId: "G-MSEV2FC1DD",
});

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// import firebase from "firebase/app";
// import "firebase/auth";
// import "firebase/firestore";

// firebase.initializeApp({
//   apiKey: "AIzaSyDA9b5NLl92Wm1k29YZ2rRg7wfPm8POY3I",
//   authDomain: "learning-ways-b36e9.firebaseapp.com",
//   projectId: "learning-ways-b36e9",
// });

// export const auth = firebase.auth();
// export const firestore = firebase.firestore();
