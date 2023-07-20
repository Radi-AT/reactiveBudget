import { createContext, useContext } from "react";
import auth from "./firebaseConfig";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const UserContext = createContext();

// useEffect(() => {
//   setIsLoading(true);
//   auth.onAuthStateChanged((user) => {
//     if (user) {
//       setCurrentUser(user);
//       setIsLoading(false);
//     } else {
//       setIsLoading(false);
//       setCurrentUser(null);
//     }
//   });
// }, [setCurrentUser, setRole, setIsLoading]);

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const createUser = () => {
    console.log("HEY LISTEN!");
  };

  const googleProvider = new GoogleAuthProvider();
  const loginGoogle = () => { return signInWithPopup(auth, googleProvider); };

  // const loginGoogle = async () => {
  //   const googleProvider = new GoogleAuthProvider();
  //   try {
  //     await signInWithPopup(auth, googleProvider).then((result) =>
  //       console.log("LOGGED IN RESULTS: ", result)
  //     );
  //   } catch (e) {
  //     console.error("ERROR DE LOGIN: ", e);
  //   }
  // };

  return (
    <UserContext.Provider value={{ createUser, loginGoogle }}>
      {children}
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};
