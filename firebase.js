import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC-Ojdnm40NJvGrN4pH00OWmnwrP2-ex9s",
  authDomain: "com.exapmle.learningways",
  projectId: "learning-ways-auth",
  storageBucket: "learning-ways-auth.appspot.com",
  messagingSenderId: "719930824203",
  appId: "1:719930824203:web:7992ca6c8577d21a70590e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export { auth, app, db };
