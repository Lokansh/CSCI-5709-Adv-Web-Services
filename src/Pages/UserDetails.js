import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import "./Pages.css";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: theme.spacing(6),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
    root: {
      flexGrow: 1,
    },
  })
);

function UserDetails() {
  const classes = useStyles();
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
        return (
          item.firstName.toLowerCase().includes(value) ||
          item.lastName.toLowerCase().includes(value)
        );
      });
      setDisplayUserDetailsList(filteredData);
    } else {
      setDisplayUserDetailsList(userDetailsList);
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

      <div style={{ width: "100%", backgroundColor: "green", padding: "10px" }}>
        <Grid container spacing={1}>
          {displayUserDetailsList.map((r) => (
            <div>
              <Grid item xs={24} sm={24}>
                <Paper className={classes.paper}>
                  <img
                    key={r.id}
                    src={r.picture}
                    alt={r.firstName}
                    onClick={() => handleClick(r.id)}
                  ></img>
                </Paper>
              </Grid>
              <Grid item xs={24} sm={24}>
                <Paper className={classes.paper}>
                  <h4>
                    Last Name : {r.lastName} &nbsp;First Name : {r.firstName}
                  </h4>
                </Paper>
              </Grid>
            </div>
          ))}
        </Grid>
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
