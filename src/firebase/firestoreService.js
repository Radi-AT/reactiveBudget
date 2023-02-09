import firesbaseInstance from "./firebaseConfig";
import { getFirestore } from "firebase/firestore";
import { collection, query, orderBy, serverTimestamp, getDocs, addDoc, onSnapshot } from "firebase/firestore";

const db = getFirestore(firesbaseInstance);

const getCollection = (collectionName) => {
  return getDocs(collection(db, collectionName));
};

function snapshotSub(collectionName, setState) {
  return onSnapshot(
    query(collection(db, collectionName), orderBy('timestamp', 'asc')),
    (querySnapshot) => {
      console.log('Suscrito a ', collectionName);
      setState(querySnapshot.docs);
    }
  );
}
function addData(collectionName, props) {
  // Add a new document with a generated id and a timestamp.
  addDoc(collection(db, collectionName), {...props, timestamp: serverTimestamp()});
}

export { db, getCollection, snapshotSub, addData, };