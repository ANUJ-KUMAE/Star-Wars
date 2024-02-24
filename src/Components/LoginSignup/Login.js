import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { database } from "./Config";
import "./LoginSignUp.css";
import universe from "../../Images/universe.jpg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMessage] = useState("");
  const [submitButtonDisable, setSubmitButtonDisable] = useState(false);
  const history = useNavigate();

  const handleSubmit = (event) => {
    if (!email || !password) {
      setErrorMessage("Fill all Data");
      return;
    }

    event.preventDefault();
    setErrorMessage("");
    setSubmitButtonDisable(true);
    signInWithEmailAndPassword(database, email, password)
      .then(async (data) => {
        setSubmitButtonDisable(false);
        history("/home");
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
          <img src={universe} alt="Universe" />
        </div>
        <div className="SignUp-values">
          <h2>Login</h2>
          <form onSubmit={handleSubmit} className="s-form">
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
              <button disabled={submitButtonDisable} className="btn">
                SignUp
              </button>
            </div>

            <div className="impt-note">
              <p>
                if don't have an Acount :{" "}
                <Link to="/signup">
                  <strong style={{ fontSize: "1.2rem" }}>SignUp</strong>
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
