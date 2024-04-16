import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCZvYcyzPKxCWMG08LoAum93DBN6EmL_iI",
    authDomain: "chat-3dae3.firebaseapp.com",
    projectId: "chat-3dae3",
    storageBucket: "chat-3dae3.appspot.com",
    messagingSenderId: "619363148213",
    appId: "1:619363148213:web:1aede9cb431c27518679fc"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const auth=getAuth(app);