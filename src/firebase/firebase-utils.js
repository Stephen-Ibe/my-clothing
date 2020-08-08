import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyC0kj4h-ZW0SzHsj4zoPTvBnrBStwUyvro",
  authDomain: "my-clothing-c6e32.firebaseapp.com",
  databaseURL: "https://my-clothing-c6e32.firebaseio.com",
  projectId: "my-clothing-c6e32",
  storageBucket: "my-clothing-c6e32.appspot.com",
  messagingSenderId: "962875680637",
  appId: "1:962875680637:web:6f198f74a66290fb5e4e14",
  measurementId: "G-GWBPWFLB3J",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase