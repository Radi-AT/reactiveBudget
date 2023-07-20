import firebaseInstance from "./firebaseConfig";
import {
  initializeFirestore,
  persistentLocalCache,
  collection,
  query,
  orderBy,
  serverTimestamp,
  doc,
  getDocs,
  addDoc,
  updateDoc,
  onSnapshot,
} from "firebase/firestore";

const db = initializeFirestore(firebaseInstance, { localCache: persistentLocalCache() });
// Subsequent queries will use persistence, if it was enabled successfully

const getCollection = (collectionName) => {
  return getDocs(collection(db, collectionName));
};

function snapshotSub(collectionName, setState) {
  return onSnapshot(
    query(collection(db, collectionName), orderBy("timestamp", "asc")),
    (querySnapshot) => {
      console.log("Suscrito a ", collectionName);
      // querySnapshot.docChanges().forEach((change) => {
      //   if (change.type === "added") {
      //     console.log("New expense: ", change.doc.data());
      //   }
      //   const source = querySnapshot.metadata.fromCache ? "local cache" : "server";
      //   console.log("Data came from " + source);
      // });
      setState(querySnapshot.docs);
    }
  );
}

function addData(collectionName, props) {
  // Add a new document with a generated id and a timestamp.
  addDoc(collection(db, collectionName), {
    ...props,
    timestamp: serverTimestamp(),
  });
}

function addCategory(user, path) {
  // const docRef = doc(db, path);
  addDoc(collection(db, path), {user: user});
}

function updateExpense(collectionName, id) {
  const docRef = doc(db, collectionName, id);

  // Set the "capital" field of the city 'DC'
  updateDoc(docRef, {
    capital: true
  });
}

export { getCollection, snapshotSub, addData, addCategory, updateExpense };
