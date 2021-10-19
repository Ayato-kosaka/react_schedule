import firebase from "./index";

// Firestoreのインスタンス作成
export const db = firebase.firestore();
// db.collection(…).doc(…).collection(…).doc(…)
// db.collection(“rooms”).add({ name: chatName });