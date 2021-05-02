import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDDN3g9ko72LoGoifoevwhZRmKsoDb0BZ8",
  authDomain: "disneyplus-clone-1296b.firebaseapp.com",
  projectId: "disneyplus-clone-1296b",
  storageBucket: "disneyplus-clone-1296b.appspot.com",
  messagingSenderId: "177563370997",
  appId: "1:177563370997:web:091ebc7d4aaeff6050ccbc"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
