
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDqdLTEWDc-Hf9WNhzvefcf-ZTQPVLPz70",
  authDomain: "netflix-2c41b.firebaseapp.com",
  projectId: "netflix-2c41b",
  storageBucket: "netflix-2c41b.appspot.com",
  messagingSenderId: "201756691291",
  appId: "1:201756691291:web:13a2bd2ab6ea311fab287e",
  measurementId: "G-NP00VMJE8X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
