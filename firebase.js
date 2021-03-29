import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBlI64Luds9vknGpyR9RKs4_O1a6022uGs",
  authDomain: "signal-clone-b5489.firebaseapp.com",
  projectId: "signal-clone-b5489",
  storageBucket: "signal-clone-b5489.appspot.com",
  messagingSenderId: "944420419841",
  appId: "1:944420419841:web:63ce8f5f25d63203b64300",
};

// init
// if (firebase.app.length === 0) {
//   app = firebase.initializeApp(firebaseConfig);
// } else {
//   app = firebase.app();
// }

const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
