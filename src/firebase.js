import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyCNG7BzUqnjW5OGxTf7SQbnRT5OFRc8Puk",
  authDomain: "admin-web-page.firebaseapp.com",
  projectId: "admin-web-page",
  storageBucket: "admin-web-page.appspot.com",
  messagingSenderId: "148361693679",
  appId: "1:148361693679:web:6c82cb8dc104aff9808e1a"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();
const db = getFirestore(app)
const storage =  getStorage(app)

export { app, auth,db };
