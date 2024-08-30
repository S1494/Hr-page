import "./App.css";
import "./index.css";
import "./css/header.css";
import "./css/footer.css";
import "./css/Introduction.css";
import "./css/aboutme.css";
import "./css/getresume.css";
import "./css/signup.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
