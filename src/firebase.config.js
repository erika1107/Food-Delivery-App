import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAoQal5_xA3G15qH3wBij9d03wXBGDyBKk",
  authDomain: "restaurantapp-3146e.firebaseapp.com",
  databaseURL: "https://restaurantapp-3146e-default-rtdb.firebaseio.com",
  projectId: "restaurantapp-3146e",
  storageBucket: "restaurantapp-3146e.appspot.com",
  messagingSenderId: "145437257771",
  appId: "1:145437257771:web:1924a0adee2b2c66a33a6e",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
