import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAy8ykSMaYahomGq_UuoRIaMuaxdIWgGGE",
  authDomain: "liquid-store-65eb0.firebaseapp.com",
  databaseURL: "https://liquid-store-65eb0.firebaseio.com",
  projectId: "liquid-store-65eb0",
  storageBucket: "liquid-store-65eb0.appspot.com",
  messagingSenderId: "417093397530",
  appId: "1:417093397530:web:02869c70ce156e1f40f5a3",
  measurementId: "G-PX3KJV7DTZ"
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const userSnapshot = await userRef.get();

  if (!userSnapshot.exists) {
    const { displayName: name, email } = userAuth;
    const createdAt = new Date();
    try {
      userRef.set({
        name, email, createdAt, ...additionalData
      });
    } catch (err) {
      console.log(err.message);
    }
  }
  return userRef;
};

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;