import firesbaseInstance from "./firebaseConfig";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs, addDoc } from "firebase/firestore";

const db = getFirestore(firesbaseInstance);

const getCollection = (collectionName) => {
  return getDocs(collection(db, collectionName));
};

const addData = async (collectionName, props) => {
  // Add a new document with a generated id.
  await addDoc(collection(db, collectionName), props);
};

export { getCollection, addData };