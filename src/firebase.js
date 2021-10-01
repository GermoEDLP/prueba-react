import firebase from "firebase/compat/app";
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDwy5yPTPc0uLYq7K0vFbD34py5gP4Mnuo",
  authDomain: "login-app-39082.firebaseapp.com",
  databaseURL: "https://login-app-39082.firebaseio.com",
  projectId: "login-app-39082",
  storageBucket: "login-app-39082.appspot.com",
  messagingSenderId: "525795638532",
  appId: "1:525795638532:web:041b683944f2f2e428e451",
  measurementId: "G-570KFEYTVB",
};

// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();



