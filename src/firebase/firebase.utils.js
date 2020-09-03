import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCpGKEPczY1T5gHvW1BUWr2It_OK04h3j0",
    authDomain: "ecom-db-8760f.firebaseapp.com",
    databaseURL: "https://ecom-db-8760f.firebaseio.com",
    projectId: "ecom-db-8760f",
    storageBucket: "ecom-db-8760f.appspot.com",
    messagingSenderId: "1070912494486",
    appId: "1:1070912494486:web:1b36d5569812d0af7a5bb7",
    measurementId: "G-CSS21FJEBG"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt : 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

