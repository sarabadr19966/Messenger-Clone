import { initializeApp } from 'firebase/app';
import { getFirestore} from 'firebase/firestore/lite';


const firebaseConfig = {
  apiKey: "AIzaSyAeN0BC8UqxYPP37HAwVD1v7bqBfKzuddc",
  authDomain: "messenger-clone-a8cfc.firebaseapp.com",
  databaseURL: "https://messenger-clone-a8cfc-default-rtdb.firebaseio.com",
  projectId: "messenger-clone-a8cfc",
  storageBucket: "messenger-clone-a8cfc.appspot.com",
  messagingSenderId: "134384683923",
  appId: "1:134384683923:web:7f4b82e2dbbcd213b3f666"
};

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  export default db;
