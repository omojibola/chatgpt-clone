import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAEdZGjV-pelj56s05S_HPtyDSvmLrRjq0',
  authDomain: 'chatgpt-clone-7d5ee.firebaseapp.com',
  projectId: 'chatgpt-clone-7d5ee',
  storageBucket: 'chatgpt-clone-7d5ee.appspot.com',
  messagingSenderId: '742087254891',
  appId: '1:742087254891:web:7de2f857aa1ea24ed2222e',
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
