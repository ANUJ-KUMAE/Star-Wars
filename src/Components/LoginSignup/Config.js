// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

// Add Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "planetdata-66ca1",
  storageBucket: "planetdata-66ca1.appspot.com",
  messagingSenderId: "1076275773419",
  appId: ""
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const database = getAuth(app);
