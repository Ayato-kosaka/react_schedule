import firebase from 'firebase';
import { collection, addDoc } from "firebase/firestore";

const env = process.env;

export const firebaseConfig = {
    apiKey: env.REACT_APP_API_KEY,
    authDomain: env.REACT_APP_AUTH_DOMAIN,
    projectId: env.REACT_APP_PROJECT_ID,
    storageBucket: env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: env.REACT_APP_MESSAGING_SENDER_ID,
    appId: env.REACT_APP_APP_ID,
    measurementId: env.REACT_APP_MEASUREMENT_ID,
};

// Firebaseを紐付け、初期化
firebase.initializeApp(firebaseConfig);
export default firebase;
export const analytics = firebase.getAnalytics(firebase);

