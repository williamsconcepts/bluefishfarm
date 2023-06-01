import { initializeApp } from "firebase/app";
import { 
     getAuth,
     signInWithRedirect, 
     signInWithPopup, 
     GoogleAuthProvider,
     createUserWithEmailAndPassword,
     signInWithEmailAndPassword,
     signOut,
     onAuthStateChanged, 
    } from 'firebase/auth';
import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    collection,
    writeBatch,
    query,
    getDocs
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

export const addCollectionAndDocuments = async (
    collectionKey, 
    objectsToAdd,
    ) => {
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);

    objectsToAdd.forEach((object) => {
        const docRef = doc(collectionRef, object.title.toLowerCase());
        batch.set(docRef, object);
    });

    await batch.commit();
    console.log('done');
};

export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db, 'categories');
    const q =  query(collectionRef);

    const querySnapshot = await getDocs(q);
        return querySnapshot.docs.map((docSnapshot) => docSnapshot.data());

};

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

    return userSnapshot;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);
};


export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) => 
    onAuthStateChanged(auth, callback);


export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = onAuthStateChanged(
            auth,
            (userAuth) => {
                unsubscribe();
                resolve(userAuth);
            },
            reject
        );
    });
};