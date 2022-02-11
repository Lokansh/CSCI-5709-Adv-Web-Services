import recycle_logo from "./Media/recycle_logo2.png";
import "./App.css";
import React, { useState } from "react";
import QueryForm from "./Component/QueryForm";
import QueryFormSuccessMsg from "./Component/QueryFormSuccessMsg";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [query, setQuery] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);

  return (
    <div className="App">
      <div className="header">
        <img src={recycle_logo} className="App-logo" alt="recycle_logo" />
        <h1>Skip the Bins</h1>
        <hr />
        <h2>Contact Us</h2>
      </div>
      <div className="Component">
        {submitSuccess ? (
          <QueryFormSuccessMsg
            setSubmitSuccess={setSubmitSuccess}
          ></QueryFormSuccessMsg>
        ) : (
          <QueryForm
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            mobile={mobile}
            setMobile={setMobile}
            query={query}
            setQuery={setQuery}
            setSubmitSuccess={setSubmitSuccess}
          ></QueryForm>
        )}
      </div>
    </div>
  );
}

export default App;
