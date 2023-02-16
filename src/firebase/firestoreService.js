import firesbaseInstance from "./firebaseConfig";
import {
  getFirestore,
  enableIndexedDbPersistence,
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

const db = getFirestore(firesbaseInstance);

enableIndexedDbPersistence(db).catch((err) => {
  if (err.code == "failed-precondition") {
    // Multiple tabs open, persistence can only be enabled in one tab at a a time.
  } else if (err.code == "unimplemented") {
    // The current browser does not support all of the features required to enable persistence.
  }
});
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

export { db, getCollection, snapshotSub, addData, addCategory, updateExpense };
