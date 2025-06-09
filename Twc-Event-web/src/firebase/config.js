import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAEE1wEkGptLCk05c4GEEtbi75ZXTU9YCs",
  authDomain: "twc-events.firebaseapp.com",
  projectId: "twc-events",
  storageBucket: "twc-events.firebasestorage.app",
  messagingSenderId: "920540046576",
  appId: "1:920540046576:web:163efbcd22cc18a0388e35"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);