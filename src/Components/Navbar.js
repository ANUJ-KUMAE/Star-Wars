import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import earth from "../Images/jupty.jpg";
import { database } from "./LoginSignup/Config";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [authenticated, setAuthenticated] = useState("");
  const history = useNavigate();

  useEffect(() => {
    const listenAuth = onAuthStateChanged(database, (user) => {
      if (user) {
        setAuthenticated(user);
      } else {
        setAuthenticated(null);
      }
    });

    return () => {
      listenAuth();
    };
  }, []);

  const handleClick = () => {
    signOut(database).then((val) => {
      console.log(val, "val");
      history("/login");
    });
  };

  return (
    <div className="navbar-container">
      <div className="Nav-list">
        <div className="Nav-image">
          <img src={earth} alt="Earth" />
        </div>
        <div className="Nav-pages">
          {authenticated === null ? (
            <ul className="pages-list">
              <li className="Login">
                <Link to="/">Login</Link>
              </li>
              <li>
                <Link to="/signup">SignUp</Link>
              </li>
            </ul>
          ) : (
            <ul className="pages-list">
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li onClick={handleClick}>
                <Link>SignOut</Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
