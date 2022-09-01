import firebase from "firebase";

// Access to database:
const firebaseConfig = {
  apiKey: "AIzaSyA9BnlX96fMf7XiUVCFRsoQzG8DGERJkeY",
  authDomain: "disneyplus-clone-a33d5.firebaseapp.com",
  projectId: "disneyplus-clone-a33d5",
  storageBucket: "disneyplus-clone-a33d5.appspot.com",
  messagingSenderId: "37918794208",
  appId: "1:37918794208:web:dbe9842dfe1dda522a4b85",
  measurementId: "G-DRVLJKWRWG",
};

// Initialize Firebase App:
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Access to Firebase Firestore:
const db = firebaseApp.firestore();
// Access to Firebase Auth:
const auth = firebase.auth();
// Access to Google Auth:
const provider = new firebase.auth.GoogleAuthProvider();
// Access to Firebase Storage:
const storage = firebase.storage();

export { auth, provider, storage };
export default db;