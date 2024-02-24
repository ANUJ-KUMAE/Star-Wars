import React, { useState } from "react";
import "./LoginSignUp.css";
import { Link, useNavigate } from "react-router-dom";
import { database } from "./Config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import universe from "../../Images/universe.jpg"

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMessage] = useState("");
  const [submitButtonDisable, setSubmitButtonDisable] = useState(false);
  const history = useNavigate();

  const handleSubmit = (event) => {
    if (!name || !email || !password) {
      setErrorMessage("Fill all Data");
      return;
    }

    event.preventDefault();
    setErrorMessage("");
    setSubmitButtonDisable(true);

    createUserWithEmailAndPassword(database, email, password)
      .then(async (data) => {
        setSubmitButtonDisable(false);
        const user = data.user;
        await updateProfile(user, {
          displayName: name,
        });
        history("/");
      })
      .catch((err) => {
        setSubmitButtonDisable(false);
        setErrorMessage(err.message);
      });
  };

  return (
    <div className="SignUp-Container">
      <div className="SignUp-data">
        <div className="S-image">
          <img src={universe} alt="Universe"/>
        </div>
        <div className="SignUp-values">
          <h2>Register</h2>
          <form onSubmit={handleSubmit} className="s-form">
            <input
              type="text"
              placeholder="Name"
              value={name}
              autoComplete="off"
              required
              onChange={(e) => setName(e.target.value)}
            />
            
            <input
              type="text"
              placeholder="Email"
              value={email}
              autoComplete="off"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            
            <input
              type="text"
              placeholder="Password"
              value={password}
              autoComplete="off"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            
            <div className="button-part">
              <p>{errorMsg}</p>
              <button disabled={submitButtonDisable} className="btn">SignUp</button>
            </div>

            <div className="impt-note">
               <p>if alreday have Acount : <Link to='/login'><strong style={{fontSize:'1.2rem'}}>Login</strong></Link></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
