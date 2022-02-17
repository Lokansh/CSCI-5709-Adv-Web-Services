import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Pages.css";

function UserProfile() {
  const [user, setuser] = useState([]);
  const params = useParams();
  const navigate = useNavigate();
  console.log("params", params);

  const api_url = `https://tutorial4-api.herokuapp.com/api/users/${params.userId}`;
  useEffect(() => {
    axios
      .get(api_url)
      .then((res) => {
        console.table("USER--->", JSON.stringify(res));
        setuser(res.data.data);
      })
      .catch((error) => {
        alert("No User");
      });
  }, []);
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <h2>UserProfile</h2>
      <div>
        <img key={user.id} src={user.picture} alt={user.firstName}></img>
      </div>
      <div>
        <h4>Title : {user.title}</h4>
        <h4>Last Name : {user.lastName}</h4>
        <h4>First Name : {user.firstName}</h4>
        <h4>Email : {user.email}</h4>
      </div>
      <div>
        &nbsp;
        <button type="submit" onClick={handleGoBack}>
          Go Back
        </button>
      </div>
    </div>
  );
}

export default UserProfile;
