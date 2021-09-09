import { initializeApp } from 'firebase/app';
import { getFirestore} from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyD5ZgJ84YcCuBttiz-U1sYist3cUDaZHPQ",
  authDomain: "messenger-clone-2cda1.firebaseapp.com",
  projectId: "messenger-clone-2cda1",
  storageBucket: "messenger-clone-2cda1.appspot.com",
  messagingSenderId: "990958815139",
  appId: "1:990958815139:web:ea5e7031d5fd17cd65fc16",
  measurementId: "G-CR2JZSLF0P"
};


  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  export default db;
