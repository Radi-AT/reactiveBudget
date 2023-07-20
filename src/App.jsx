import "./App.css";
import { Routes, Route } from "react-router-dom";
import DataList from "./components/DataList";
import LogIn from "./components/LogIn";
import { signOut } from "firebase/auth";
import { auth } from "./firebase/firebaseConfig";
import Enter from "./components/Enter";

function App() {
  const logout = async () => {
    try {
      await signOut(auth);
      console.log("YOU ARE LOGED OUT");
    } catch (e) {
      console.log("ERROR EN LOGOUT: ", e);
    }
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/gastos" element={<DataList />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
      <Enter/>
      <button onClick={() => logout()}>LOG OUT</button>
    </div>
  );
}

export default App;
