import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";

const Enter = () => {
  const user = null;
  const username = null;

  return (
    <main>
      {user ?
        !username ? <UsernameForm /> : <SignOutButton />
        :
        <SignInButton />
      }
    </main>
  );
};

// Sign in with Google button
function SignInButton() {
  const signInWithGoogle = async () => {
    const googleAuthProvider = new GoogleAuthProvider();
    console.log('googleAuthProvider', googleAuthProvider);
    console.log('AUTH', auth);
    await signInWithPopup(auth, googleAuthProvider);
  };

  return (
    <button className="btn-google" onClick={signInWithGoogle}>
      <img src={'/google.png'} style={{maxHeight : '1.5em'}}/> Sign in with Google
    </button>
  );
}

// Sign out button
function SignOutButton() {
  return <button onClick={() => auth.signOut()}>Sign Out</button>;
}

function UsernameForm() {
  return null;
}

export default Enter;
