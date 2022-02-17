import "./App.css";
import React, { useState } from "react";

import { Routes, Route, NavLink } from "react-router-dom";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import UserDetails from "./Pages/UserDetails";
import UserProfile from "./Pages/UserProfile";

function App() {
  return (
    <div className="App">
      <h1>User Management Application</h1>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/user_details">
          <Route path=":userId" element={<UserProfile />}></Route>
          <Route index element={<UserDetails />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
