import * as firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDKlLN4jqlGBW-B-IvVM8QsJiHSFzUQ8us",
  authDomain: "signal-clone-166bd.firebaseapp.com",
  projectId: "signal-clone-166bd",
  storageBucket: "signal-clone-166bd.appspot.com",
  messagingSenderId: "761733368449",
  appId: "1:761733368449:web:dae26bde10911b0276db80"
};

let app;

if(firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}


const db = app.firestore();
const auth = firebase.auth();

export { db, auth} ;