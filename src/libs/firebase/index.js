// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database"
import {getAuth} from "firebase/auth"

// Set Up the Firebase Config with .env the Create React App Way.
// This will have to be added to netlify.
const firebaseConfig = { 
  apiKey: /* process.env.REACT_APP_API_KEY */ "AIzaSyBv7ZYI2ItHr0g6v9iSQMFHPKQ6metAbuk",
  authDomain: /* process.env.REACT_APP_AUTH_DOMAIN */ "hephaestus-pc.firebaseapp.com",
  databaseURL: /* process.env.REACT_APP_DATABASE_URL */ "https://hephaestus-pc-default-rtdb.firebaseio.com",
  projectId: /* process.env.REACT_APP_PROJECT_ID */ "hephaestus-pc",
  storageBucket: /* process.env.REACT_APP_STORAGE_BUCKET */ "hephaestus-pc.appspot.com",
  messagingSenderId: /* process.env.REACT_APP_MESSAGING_SENDER_ID */ "838422217990",
  appId: /* process.env.REACT_APP_APP_ID */ "1:838422217990:web:4d5f0e279d66add9000a87"
};

// Initialize Firebase App and associated services
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getDatabase(app)

export {auth, db}