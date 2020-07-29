import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBT5_SFEFqTnxfOihEBFq-j93hPzebwOnY",
    authDomain: "e-dukani.firebaseapp.com",
    databaseURL: "https://e-dukani.firebaseio.com",
    projectId: "e-dukani",
    storageBucket: "e-dukani.appspot.com",
    messagingSenderId: "495410997738",
    appId: "1:495410997738:web:0656ed876363f58b54aa93",
    measurementId: "G-DJYDN5RJ8L"
});

// const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth }