import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-_1kz0N1IFwFjZAvl7XL8Zj-J5nQNRSA",
  authDomain: "reactivebudget-bd8ce.firebaseapp.com",
  projectId: "reactivebudget-bd8ce",
  storageBucket: "reactivebudget-bd8ce.appspot.com",
  messagingSenderId: "529244588475",
  appId: "1:529244588475:web:e4a140eea4c971c773dc9e"
};

// Initialize Firebase
const firebaseInstance = initializeApp(firebaseConfig);

export const auth = getAuth();
export default firebaseInstance;