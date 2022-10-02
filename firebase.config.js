import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBTJ-VvcD7hbLDGj6Kh_PZAbILHkOe-7Cs",
  authDomain: "new--doc.firebaseapp.com",
  projectId: "new--doc",
  storageBucket: "new--doc.appspot.com",
  messagingSenderId: "857301085016",
  appId: "1:857301085016:web:c2235401252db338b5132d",
};

const app = getApps?.length > 0 ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, db, storage };
