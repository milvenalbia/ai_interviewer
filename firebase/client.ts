import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD2pJpvB3BOhXErOJ9DroJ9YlJStAv3xLg",
  authDomain: "prepwise-94ee5.firebaseapp.com",
  projectId: "prepwise-94ee5",
  storageBucket: "prepwise-94ee5.firebasestorage.app",
  messagingSenderId: "39422410578",
  appId: "1:39422410578:web:bd640672bf46ba2366848b",
  measurementId: "G-EJX2CLQHZQ",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);

export const db = getFirestore(app);
