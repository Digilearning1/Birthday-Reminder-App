import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container" style={{textAlign:"center"}}>
      <h3>Employee Birthday</h3>
      <Link to="/empdetails">Employee Details</Link><br />
      <Link to="/empbirthday">Today Birthday</Link>
    </div>
  );
};

export default Home;
