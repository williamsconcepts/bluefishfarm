import { initializeApp } from "firebase/app";
import { 
     getAuth,
     signInWithRedirect, 
     signInWithPopup, 
     GoogleAuthProvider,
     createUserWithEmailAndPassword 
    } from 'firebase/auth';
import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBtaVv2_V3wcVku0xG7O2kuu4-vthh4bo8",
  authDomain: "bluefishfarm.firebaseapp.com",
  projectId: "bluefishfarm",
  storageBucket: "bluefishfarm.appspot.com",
  messagingSenderId: "41674615698",
  appId: "1:41674615698:web:04f51eb329e136328c2f4b"
};


const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, 
    additionalInformation = {}
    ) => {
    if(!userAuth) return;
    const userDocRef = doc(db, 'users', userAuth.uid);


    const userSnapshot = await getDoc(userDocRef);


    // check if user data exists
    if(!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
    
        // create / set the document with the data from userAuth in my collection
        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation,
            });
        // if user data doesn't exists
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    // return userDocRef
    return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
};