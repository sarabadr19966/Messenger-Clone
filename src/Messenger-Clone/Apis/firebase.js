import { initializeApp } from 'firebase/app';
import { getFirestore} from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyBkzpn48FvqSDSZV1B5afd1H_x904DHZ2Y",
  authDomain: "messenger-fc25c.firebaseapp.com",
  projectId: "messenger-fc25c",
  storageBucket: "messenger-fc25c.appspot.com",
  messagingSenderId: "541377847811",
  appId: "1:541377847811:web:b1d3c658a081d6e147a436"
};


  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  export default db;
