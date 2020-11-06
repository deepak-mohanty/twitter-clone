import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-zV8L3Lbak9CyjGbgsjjwDcfs7hI_mMQ",
  authDomain: "twitter-clone-ccd76.firebaseapp.com",
  databaseURL: "https://twitter-clone-ccd76.firebaseio.com",
  projectId: "twitter-clone-ccd76",
  storageBucket: "twitter-clone-ccd76.appspot.com",
  messagingSenderId: "51800102302",
  appId: "1:51800102302:web:4c4169485a5498a07df28f",
  measurementId: "G-9ZME5T4SDT"
};


//Connecting to firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
// console.log('Firebase debug ', firebase.firestore.setLogLevel('debug'))

//Connect to firebase database
const db = firebaseApp.firestore();

export default db;