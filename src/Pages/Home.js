import React from "react";
import { useNavigate } from "react-router";
function Home() {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  };
  return (
    <div>
      <h2>Home Page</h2>
      <div>
        <button type="submit" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Home;
