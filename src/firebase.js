import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
   apiKey: "AIzaSyABqWQmytPXzyjoZ6mrlAkjAeSWKdV1WsE",
  authDomain: "nitroz-a8008.firebaseapp.com",
  projectId: "nitroz-a8008",
  storageBucket: "nitroz-a8008.appspot.com",
  messagingSenderId: "910848554564",
  appId: "1:910848554564:web:f8c5e25741329a7bf2ae11",
  measurementId: "G-VYBCCM1T7X"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();
const db = getFirestore(app)

export { app, auth,db };
