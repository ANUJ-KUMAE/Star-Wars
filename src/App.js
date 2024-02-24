//import logo from './logo.svg';
import "./App.css";
//import PlanetData from './Components/PlanetData';
import Navbar from "./Components/Navbar";
//import Footer from "./Components/Footer";
//import Home from "./Components/LoginSignup/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/LoginSignup/Login";
import SignUp from "./Components/LoginSignup/SignUp";
import Home from "./Components/LoginSignup/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home/>} />

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
