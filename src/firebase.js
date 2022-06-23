import firebase from "firebase";
// 파이어베이스 npm install firebase@8 로 설치해야함.
// 왜냐면 9버전은 다르게 쓰이기 때문에 적용이 안됨.
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDdT-qeBMTpZQzPE-TwbxmrLTsn5s_t9uo",
  authDomain: "asfjkh-39210.firebaseapp.com",
  projectId: "asfjkh-39210",
  storageBucket: "asfjkh-39210.appspot.com",
  messagingSenderId: "596536669287",
  appId: "1:596536669287:web:d159711449e598627510c2",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
