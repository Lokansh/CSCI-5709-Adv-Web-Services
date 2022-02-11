import React, { useState } from "react";
import "./Component.css";

function QueryFormSuccessMsg(props) {
  const handleGoBack = (e) => {
    props.setSubmitSuccess(false);
  };
  return (
    <div>
      <div>Your query has been successfully submitted.</div>
      <div>
        <button className="Button" type="submit" onClick={handleGoBack}>
          Go Back
        </button>
      </div>
    </div>
  );
}

export default QueryFormSuccessMsg;
