import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyCTpVqgv_zb6z4w4o_OoWOlaBX_39vjl94",
  authDomain: "short-url-2a24d.firebaseapp.com",
  projectId: "short-url-2a24d",
  storageBucket: "short-url-2a24d.appspot.com",
  messagingSenderId: "459209474053",
  appId: "1:459209474053:web:83a266714b29c76c6c1c6c",
  measurementId: "G-95Z7MMDMNH",
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const firestore = getFirestore(app);