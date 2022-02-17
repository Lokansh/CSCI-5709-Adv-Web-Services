import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Pages.css";

function Login(props) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const api_url = "https://tutorial4-api.herokuapp.com/api/users/login";

  const [emailErrorMsg, setEmailErrorMsg] = useState("");
  const [passwordErrorMsg, setPasswordErrorMsg] = useState("");
  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState(false);

  const [isData, setIsData] = useState(false);

  const handleEmail = (e) => {
    if (e.target.value && !emailRegex.test(e.target.value)) {
      setEmailErrorMsg(
        "Please provide email in correct format (Eg. 'xyz@abc.com')"
      );
      setIsEmail(false);
    } else {
      setIsData(true);
      setIsEmail(true);
      setEmailErrorMsg("");
      console.log(e.target.value);
      setEmail(e.target.value);
    }
  };
  const handlePassword = (e) => {
    if (!e.target.value) {
      setPasswordErrorMsg("Please enter password");
    } else {
      setIsData(true);
      setIsPassword(true);
      setPasswordErrorMsg("");
      console.log(e.target.value);
      setPassword(e.target.value);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (emailErrorMsg.length > 0 || passwordErrorMsg.length > 0) {
      alert("Please resolve error");
    } else if (!isData) {
      alert("Please enter some data");
    } else if (!isEmail || !isPassword) {
      alert("Please fill data in all fields of the form");
    } else {
      const apiBody = {
        email: email,
        password: password,
      };
      axios
        .post(api_url, apiBody)
        .then((res) => {
          console.log(res);
          console.log(JSON.stringify(res));
          if (res.status) {
            navigate("/user_details");
          }
        })
        .catch((error) => {
          alert("Wrong login creds....redirecting to Home page");
          navigate("/");
        });
    }
  };
  const handleGoBack = () => {
    navigate("/");
  };
  return (
    <div>
      <h2>Login Page</h2>
      <form>
        <div>
          <label>Email:</label>
          <input
            id="email"
            type="text"
            onChange={handleEmail}
            placeholder="Enter e-mail id"
          ></input>
          {emailErrorMsg.length > 0 ? (
            <p style={{ color: "red" }}>{emailErrorMsg}</p>
          ) : (
            ""
          )}
        </div>
        <div>
          <label>Password: </label>
          <input
            id="password"
            type="password"
            onChange={handlePassword}
            placeholder="Enter password"
          ></input>
          {passwordErrorMsg.length > 0 ? (
            <p style={{ color: "red" }}>{passwordErrorMsg}</p>
          ) : (
            ""
          )}
        </div>
        <div>
          <button type="submit" onClick={handleSubmit}>
            Login
          </button>
        </div>
        <div>
          <button type="submit" onClick={handleGoBack}>
            Go Back
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
