import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";

// import firebase from 'firebase'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
      // apiKey: process.env.APIKEY,
      // authDomain: process.env.AUTH_DOMAIN,
      // projectId: process.env.PROJECT_ID,
      // storageBucket: process.env.STORAGE_BUCKET,
      // messagingSenderId: process.env.MSG_SENDER_ID,
      // appId: process.env.APP_ID,
      // measurementId: process.env.MEASUREMENT_ID,

      apiKey: "AIzaSyCYit2WZIxwO5_BJPq9U8MpCDQUKdDck28",
      authDomain: "slack-clone-b7088.firebaseapp.com",
      projectId: "slack-clone-b7088",
      storageBucket: "slack-clone-b7088.appspot.com",
      messagingSenderId: "342834192025",
      appId: "1:342834192025:web:3244beafccc09edf5be208",
      measurementId: "G-Q0V1V17Z6Y"

    // apiKey: "AIzaSyBKX01gNLYGZMKwPfzIg8QW8_4H-b2IJvA",
    // authDomain: "slack-clone-f6ef0.firebaseapp.com",
    // projectId: "slack-clone-f6ef0",
    // storageBucket: "slack-clone-f6ef0.appspot.com",
    // messagingSenderId: "1084270073184",
    // appId: "1:1084270073184:web:099fc04013e11acfb5fa05",
    // measurementId: "G-FD4PD0ERM7"

//  freshone
//  apiKey: "AIzaSyDSgd4SUQfqFy4Q_DGtcmNxBa9MXc_2RSw",
//  authDomain: "slack-calvary.firebaseapp.com",
//  projectId: "slack-calvary",
//  storageBucket: "slack-calvary.appspot.com",
//  messagingSenderId: "546434327878",
//  appId: "1:546434327878:web:ddd20e4ae639acc3c1f147",
//  measurementId: "G-EWT4QQGETG"
  };
  
  const firebaseApp = initializeApp(firebaseConfig);
  const db = getFirestore(firebaseApp);
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  // const auth = firebase.auth();
  // const provider = new firebase.auth.GoogleAuthProvider();

 export default db;
  export  { auth, provider };