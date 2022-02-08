import React, { useState } from "react";

function Login(props) {
  const usernameRegex = /^[a-zA-Z]+$/;
  const emailRegex = /\S+@\S+\.\S+/;
  const passwordRegex = /((?=.*\d)(?=.*[A-Z])(?=.*\W).{8,8})/;
  const [firstnameErrorMsg, setFirstnameErrorMsg] = useState("");
  const [lastnameErrorMsg, setLastnameErrorMsg] = useState("");
  const [emailErrorMsg, setEmailErrorMsg] = useState("");
  const [passwordErrorMsg, setPasswordErrorMsg] = useState("");
  const [verifyPasswordErrorMsg, setVerifyPasswordErrorMsg] = useState("");
  const [isData, setIsData] = useState(false);
  const handleFirstname = (e) => {
    if (!usernameRegex.test(e.target.value) && e.target.value) {
      setFirstnameErrorMsg("Please provide input in alphabets only");
    } else {
      setIsData(true);
      setFirstnameErrorMsg("");
      console.log(e.target.value);
      props.setFirstName(e.target.value);
    }
  };
  const handleLastname = (e) => {
    if (!usernameRegex.test(e.target.value) && e.target.value) {
      setLastnameErrorMsg("Please provide input in alphabets only");
    } else {
      setIsData(true);
      setLastnameErrorMsg("");
      console.log(e.target.value);
      props.setLastName(e.target.value);
    }
  };
  const handleEmail = (e) => {
    if (!emailRegex.test(e.target.value) && e.target.value) {
      setEmailErrorMsg("Please provide email in correct format");
    } else {
      setIsData(true);
      setEmailErrorMsg("");
      console.log(e.target.value);
      props.setEmail(e.target.value);
    }
  };
  const handlePassword = (e) => {
    if (!passwordRegex.test(e.target.value) && e.target.value) {
      setPasswordErrorMsg("Please provide password in correct format");
    } else {
      setIsData(true);
      setPasswordErrorMsg("");
      console.log(e.target.value);
      props.setPassword(e.target.value);
    }
  };
  const handleVerifyPassword = (e) => {
    if (e.target.value && e.target.value.localeCompare(props.password)) {
      setVerifyPasswordErrorMsg("Please enter correct password");
    } else {
      setIsData(true);
      setVerifyPasswordErrorMsg("");
      console.log(e.target.value);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      firstnameErrorMsg.length > 0 ||
      lastnameErrorMsg.length > 0 ||
      emailErrorMsg.length > 0 ||
      passwordErrorMsg.length > 0 ||
      verifyPasswordErrorMsg.length > 0
    ) {
      alert("Please resolve error");
    } else if (!isData) {
      alert("Please enter some data");
    } else {
      props.setLoggedIn(true);
      alert("Successful submission");
    }
  };
  return (
    <div>
      <form>
        <h1>Login page</h1>
        <div>
          <label>First Name: </label>
          <input type="text" id="firstname" onChange={handleFirstname}></input>
          {firstnameErrorMsg.length > 0 ? (
            <p style={{ color: "red" }}>{firstnameErrorMsg}</p>
          ) : (
            ""
          )}
        </div>
        <div>
          <label>Last Name: </label>
          <input type="text" id="lastname" onChange={handleLastname}></input>
          {lastnameErrorMsg.length > 0 ? (
            <p style={{ color: "red" }}>{lastnameErrorMsg}</p>
          ) : (
            ""
          )}
        </div>
        <div>
          <label>Email: </label>
          <input type="text" id="email" onChange={handleEmail}></input>
          {emailErrorMsg.length > 0 ? (
            <p style={{ color: "red" }}>{emailErrorMsg}</p>
          ) : (
            ""
          )}
        </div>
        <div>
          <label>Password: </label>
          <input type="text" id="password" onChange={handlePassword}></input>
          {passwordErrorMsg.length > 0 ? (
            <p style={{ color: "red" }}>{passwordErrorMsg}</p>
          ) : (
            ""
          )}
        </div>
        <div>
          <label>Verify Password: </label>
          <input
            type="text"
            id="verifyPassword"
            onChange={handleVerifyPassword}
          ></input>
          {verifyPasswordErrorMsg.length > 0 ? (
            <p style={{ color: "red" }}>{verifyPasswordErrorMsg}</p>
          ) : (
            ""
          )}
        </div>
        <div>
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
