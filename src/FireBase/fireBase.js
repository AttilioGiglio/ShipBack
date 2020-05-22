import * as firebase from "firebase/app";
import "firebase/auth";

const FireBase = firebase.initializeApp({
  apiKey: "AIzaSyBFO6MMMUQOfIYmFch_BbXwMxmJ4uY-aJ8",
    authDomain: "shipback-76f0e.firebaseapp.com",
    databaseURL: "https://shipback-76f0e.firebaseio.com",
    projectId: "shipback-76f0e",
    storageBucket: "shipback-76f0e.appspot.com",
    messagingSenderId: "166491262839",
    appId: "1:166491262839:web:52c8fe1e93e82f939c9b72",
    measurementId: "G-CFRFF25E93"
});

export default FireBase;