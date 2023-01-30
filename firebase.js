import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDA9b5NLl92Wm1k29YZ2rRg7wfPm8POY3I",
  authDomain: "learning-ways-b36e9.firebaseapp.com",
  projectId: "learning-ways-b36e9",
  storageBucket: "learning-ways-b36e9.appspot.com",
  messagingSenderId: "269283875815",
  appId: "1:269283875815:web:122bcf723d06baccfd3b42",
  measurementId: "G-MSEV2FC1DD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
// console.log(auth)
export { auth, app, db };

// import { initializeApp, firebase } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// // import firebase from "firebase/app";
// import "firebase/auth";
// import "firebase/firestore";
// initializeApp({
//   apiKey: "AIzaSyDA9b5NLl92Wm1k29YZ2rRg7wfPm8POY3I",
//   authDomain: "learning-ways-b36e9.firebaseapp.com",
//   projectId: "learning-ways-b36e9",
//   storageBucket: "learning-ways-b36e9.appspot.com",
//   messagingSenderId: "269283875815",
//   appId: "1:269283875815:web:122bcf723d06baccfd3b42",
//   measurementId: "G-MSEV2FC1DD",
// });
// export const auth = firebase.auth();
// export const firestore = firebase.firestore();
// // Initialize Firebase
// // const app = initializeApp(firebaseConfig);

// // const db = getFirestore(app);
// // const auth = getAuth(app);

// // export { auth, app, db };
// // import  firebase  from "firebase/app";
// // import "firebase/auth";
// // import "firebase/firestore";
// // console.log(firebase)
// // firebase.initializeApp({
// //   apiKey: "AIzaSyDA9b5NLl92Wm1k29YZ2rRg7wfPm8POY3I",
// //   authDomain: "learning-ways-b36e9.firebaseapp.com",
// //   projectId: "learning-ways-b36e9",
// //   storageBucket: "learning-ways-b36e9.appspot.com",
// //   messagingSenderId: "269283875815",
// //   appId: "1:269283875815:web:122bcf723d06baccfd3b42",
// //   measurementId: "G-MSEV2FC1DD",
// // });

// // export const auth = firebase.auth();
// // export const firestore = firebase.firestore();

// // import firebase from "firebase/app";
// // import "firebase/auth";
// // import "firebase/firestore";

// // firebase.initializeApp({
// //   apiKey: "AIzaSyDA9b5NLl92Wm1k29YZ2rRg7wfPm8POY3I",
// //   authDomain: "learning-ways-b36e9.firebaseapp.com",
// //   projectId: "learning-ways-b36e9",
// // });

// // export const auth = firebase.auth();
// // export const firestore = firebase.firestore();
