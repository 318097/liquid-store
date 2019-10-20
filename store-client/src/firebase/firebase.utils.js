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

export const addCollectionAndDocuments = async (collectionName, documents) => {
  const collectionRef = firestore.collection('products');

  const data = Array(10).fill(null).map((_, index) => ({
    productId: index + 1,
    name: `Product-${index + 1}`,
    price: Math.floor(Math.random() * 100),
    url: 'https://source.unsplash.com/random/200x250'
  }));

  const batch = firestore.batch();

  data.forEach(document => {
    const newDocumentRef = collectionRef.doc();
    batch.set(newDocumentRef, { ...document });
  });

  const result = await batch.commit();
  console.log(result);
}