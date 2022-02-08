import React from "react";

function Profile(props) {
  const handleLogOut = () => {
    props.setFirstName("");
    props.setLastName("");
    props.setEmail("");
    props.setLoggedIn(false);
  };

  return (
    <div>
      <h1>Profile page</h1>
      <div>
        <label>First Name - {props.firstName}</label>
      </div>
      <div>
        <label>Last Name - {props.lastName}</label>
      </div>
      <div>
        <label>Email - {props.email}</label>
      </div>
      <div>
        <button type="submit" onClick={handleLogOut}>
          Log out
        </button>
      </div>
    </div>
  );
}

export default Profile;
