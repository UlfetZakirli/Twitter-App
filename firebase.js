// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUXeQlVd364GMI0N_H9kNt_PWLfunqkts",
  authDomain: "twitter-clone-yt-a01c3.firebaseapp.com",
  databaseURL: "https://twitter-clone-yt-a01c3-default-rtdb.firebaseio.com",
  projectId: "twitter-clone-yt-a01c3",
  storageBucket: "twitter-clone-yt-a01c3.appspot.com",
  messagingSenderId: "890187792565",
  appId: "1:890187792565:web:c5fb4cde441b59043abefc"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };