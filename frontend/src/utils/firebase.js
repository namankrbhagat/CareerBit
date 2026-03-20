import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "careerbit-e745e.firebaseapp.com",
  projectId: "careerbit-e745e",
  storageBucket: "careerbit-e745e.firebasestorage.app",
  messagingSenderId: "293058079921",
  appId: "1:293058079921:web:374043df1adac357774690"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider =new GoogleAuthProvider();

export {auth,provider};