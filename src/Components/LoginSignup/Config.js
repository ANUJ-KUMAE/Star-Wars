// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3vVFmWkZ2266YeM7fejK3HU1ucGS2ulY",
  authDomain: "planetdata-66ca1.firebaseapp.com",
  projectId: "planetdata-66ca1",
  storageBucket: "planetdata-66ca1.appspot.com",
  messagingSenderId: "1076275773419",
  appId: "1:1076275773419:web:1823919662a88dc6fca3ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const database = getAuth(app);