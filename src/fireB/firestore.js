import firebase from "fireB/firebase";

// Firestoreのインスタンス作成
const db = firebase.firestore();
export default db;
// db.collection(…).doc(…).collection(…).doc(…)

// let data = [];
// db.collection('yasais').get().then(snapShot => {
//     snapShot.forEach(doc => {
//         data.push(doc.data());
//     });
//     this.setState({ ysiList: data });
// });

// db.collection("yasais").set({name: ysiName})
//   .then(function (docRef) {
//     alert("Document written with ID: ", docRef.id);
//   })
//   .catch(function (error) {
//     alert("Error adding document: ", error);
//   });