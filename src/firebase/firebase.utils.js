import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB6it64N6jrA6hPvecyGzieKZlTVDFFJus",
    authDomain: "michael-clothing-db.firebaseapp.com",
    databaseURL: "https://michael-clothing-db.firebaseio.com",
    projectId: "michael-clothing-db",
    storageBucket: "michael-clothing-db.appspot.com",
    messagingSenderId: "635632977774",
    appId: "1:635632977774:web:b5ba5c7d8addf2b951637f"
}
firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;