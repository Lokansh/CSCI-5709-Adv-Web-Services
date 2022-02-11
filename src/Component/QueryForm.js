import React, { useState } from "react";
import "./Component.css";

function QueryForm(props) {
  const nameRegex = /^[a-zA-Z]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const mobileRegex = /^(\+\d{1,3}[- ]?)?\d{10}$/;

  const [nameErrorMsg, setNameErrorMsg] = useState("");
  const [emailErrorMsg, setEmailErrorMsg] = useState("");
  const [mobileErrorMsg, setMobileErrorMsg] = useState("");
  const [queryErrorMsg, setQueryErrorMsg] = useState("");
  const [isName, setIsName] = useState(false);
  const [isEmail, setIsEmail] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isQuery, setIsQuery] = useState(false);
  const [isData, setIsData] = useState(false);

  const handleName = (e) => {
    if (e.target.value && !nameRegex.test(e.target.value)) {
      setNameErrorMsg(
        "Please provide name in correct alphabet only format (Eg. 'Dylan Williams')"
      );
      setIsName(false);
    } else {
      setIsData(true);
      setIsName(true);
      setNameErrorMsg("");
      console.log(e.target.value);
      props.setName(e.target.value);
    }
  };
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
      props.setEmail(e.target.value);
    }
  };
  const handleMobile = (e) => {
    if (e.target.value && !mobileRegex.test(e.target.value)) {
      setMobileErrorMsg(
        "Please provide mobile number in correct format (Eg. '+1-8087339090')"
      );
      setIsName(false);
    } else {
      setIsData(true);
      setIsMobile(true);
      setMobileErrorMsg("");
      console.log(e.target.value);
      props.setMobile(e.target.value);
    }
  };
  const handleQuery = (e) => {
    if (!e.target.value) {
      setQueryErrorMsg("Please provide your query");
      setIsQuery(false);
    } else {
      setIsData(true);
      setIsQuery(true);
      setQueryErrorMsg("");
      console.log(e.target.value);
      props.setQuery(e.target.value);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      nameErrorMsg.length > 0 ||
      emailErrorMsg.length > 0 ||
      mobileErrorMsg.length > 0 ||
      queryErrorMsg.length > 0
    ) {
      alert("Please resolve error");
    } else if (!isName || !isEmail || !isMobile || !isQuery) {
      alert("Please fill data in all fields of the form");
    } else if (!isData) {
      alert("Please enter some data");
    } else {
      props.setSubmitSuccess(true);
    }
  };
  return (
    <div>
      <form>
        <h3>Submit a query</h3>
        <h5>
          Facing an issue, please fill in the form below and we will get back to
          you.
        </h5>
        <div>
          <label>Full Name</label>
          <br />
          <input
            id="name"
            type="text"
            onChange={handleName}
            placeholder="Your name"
          ></input>
          {nameErrorMsg.length > 0 ? (
            <p style={{ color: "red" }}>{nameErrorMsg}</p>
          ) : (
            ""
          )}
        </div>
        <div>
          <label>E-mail</label> <br />
          <input
            id="email"
            type="text"
            onChange={handleEmail}
            placeholder="Your e-mail address"
          ></input>
          {emailErrorMsg.length > 0 ? (
            <p style={{ color: "red" }}>{emailErrorMsg}</p>
          ) : (
            ""
          )}
        </div>
        <div>
          <label>Mobile Number</label> <br />
          <input
            type="text"
            id="mobile"
            onChange={handleMobile}
            placeholder="Your mobile number"
          ></input>
          {mobileErrorMsg.length > 0 ? (
            <p style={{ color: "red" }}>{mobileErrorMsg}</p>
          ) : (
            ""
          )}
        </div>
        <div>
          <label>Query</label> <br />
          <textarea
            id="query"
            rows="8"
            cols="50"
            placeholder="Enter query..."
            onChange={handleQuery}
          ></textarea>
          {queryErrorMsg.length > 0 ? (
            <p style={{ color: "red" }}>{queryErrorMsg}</p>
          ) : (
            ""
          )}
        </div>
        <div>
          <button className="Button" type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default QueryForm;
