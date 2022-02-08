import "./App.css";
import React, { useEffect, useState } from "react";
import Login from "./Component/Login";
import Profile from "./Component/Profile";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div className="App">
      {loggedIn ? (
        <Profile
          firstName={firstName}
          setFirstName={setFirstName}
          lastName={lastName}
          setLastName={setLastName}
          email={email}
          setEmail={setEmail}
          setLoggedIn={setLoggedIn}
        ></Profile>
      ) : (
        <Login
          firstName={firstName}
          setFirstName={setFirstName}
          lastName={lastName}
          setLastName={setLastName}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          setLoggedIn={setLoggedIn}
        ></Login>
      )}
    </div>
  );
}

export default App;
