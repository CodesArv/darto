import { initializeApp } from "firebase/app";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyCZVw43ifUQFC6m2ye_jyWqo-wviflgiwQ",
  authDomain: "utopian-pen-294714.firebaseapp.com",
  projectId: "utopian-pen-294714",
  storageBucket: "utopian-pen-294714.appspot.com",
  messagingSenderId: "605605092110",
  appId: "1:605605092110:web:d1a0732fef624b6c3b155f",
  measurementId: "G-B6XRB78W7G",
};
// Initialize Firebase
const Dartofirebase = initializeApp(firebaseConfig);

//const db = getFirestore(Dartofirebase);

export default Dartofirebase;
