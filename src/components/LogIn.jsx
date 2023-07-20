import { Link } from "react-router-dom";
import { UserAuth } from "../firebase/authProvider";

const LogIn = () => {
  // Use rafce to start quick
  const {loginGoogle} = UserAuth();

  const login = async () => {
    console.log('LOGIN CLICK');
    await loginGoogle();
  };

  return (
    <article>
      <h1>Log In</h1>
      <button onClick={() => login()}>Log in with Google</button>
      <p>
        <Link to="/login">Accede a tu cuenta</Link>
      </p>
      <p>
        <Link to="/gastos">Accede a tus gastos</Link>
      </p>
    </article>
  );
};

export default LogIn;
