import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCJRGCxK7JJCOFSXgL-1iykuhnJtB0ywI0",
  authDomain: "chat-c6902.firebaseapp.com",
  databaseURL: "https://chat-c6902-default-rtdb.firebaseio.com",
  projectId: "chat-c6902",
  storageBucket: "chat-c6902.appspot.com",
  messagingSenderId: "316659908944",
  appId: "1:316659908944:web:11c0d5c07de95d6154ec55",
  measurementId: "G-0PRR3QLEVR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
