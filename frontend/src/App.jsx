import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./context/UserContext";
import Register from "./auth/Register";
import axios from "axios";
import SignIn from "./auth/SignIn";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./pages/Home";

function App() {
  axios.defaults.baseURL = "http://localhost:5000";
  axios.defaults.withCredentials = true;

  const { username } = useContext(UserContext);

  if (username) {
    return "Logged In " + username;
  }

  return (
    <Router>
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<Register />} />
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
