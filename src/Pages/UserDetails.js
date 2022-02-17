import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function UserDetails() {
  const navigate = useNavigate();
  const [userDetailsList, setuserDetailsList] = useState([]);
  const [displayUserDetailsList, setDisplayUserDetailsList] = useState([]);
  const [filteredUserDetailsList, setFilteredUserDetailsList] = useState([]);

  const api_url = "https://tutorial4-api.herokuapp.com/api/users/";
  useEffect(() => {
    axios
      .get(api_url)
      .then((res) => {
        console.table("UserDetails--->", JSON.stringify(res));
        setuserDetailsList(res.data.data);
        setDisplayUserDetailsList(res.data.data);
      })
      .catch((error) => {
        alert("No Data");
      });
  }, []);
  const handleClick = (id) => {
    navigate(`/user_details/${id}`);
  };
  const handleGoBack = () => {
    navigate(-1);
  };
  const handleSearch = (e) => {
    let value = e.target.value.toLowerCase();

    if (value !== "") {
      const filteredData = userDetailsList.filter((item) => {
        return Object.values(item).firstName.toLowerCase().includes(value);
      });
      setDisplayUserDetailsList(filteredData);
    } else {
      setDisplayUserDetailsList(userDetailsList);
    }

    if (value == null) {
      console.log("EEMMPTY");
      displayUserDetailsList = userDetailsList;
    } else {
      console.log("INDIDE SEARCH");
      //console.log("INDIDE SEARCH----" + displayUserDetailsList);
      console.log("INDIDE SEARCH----" + JSON.stringify(displayUserDetailsList));
      //   for (let key in displayUserDetailsList) {
      //     if (
      //       displayUserDetailsList[key].firstName.toLowerCase().includes(value) ||
      //       displayUserDetailsList[key].lastName.toLowerCase().includes(value)
      //     ) {
      //       console.log(displayUserDetailsList[key]);
      //     }
      //   }
    }
  };
  return (
    <div>
      <h2>User Details Page</h2>
      <div>
        <label>Search</label>
        <input
          type="text"
          onChange={handleSearch}
          placeholder="Enter first or last name"
        ></input>
      </div>
      <div>
        {displayUserDetailsList.map((r) => (
          <div>
            <img
              key={r.id}
              src={r.picture}
              alt={r.firstName}
              onClick={() => handleClick(r.id)}
            ></img>
          </div>
        ))}
      </div>
      <div>
        <button type="submit" onClick={handleGoBack}>
          Go Back
        </button>
      </div>
    </div>
  );
}

export default UserDetails;
