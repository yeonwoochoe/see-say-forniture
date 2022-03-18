import React from "react";
import { Link } from "react-router-dom";
import Nav from "../components/Layout/Nav";
import classes from "./SideBar.module.scss";

const SideBar = () => {
  return (
    <header id={classes.headBox}>
      <Link to="/">
        <h1>See,say</h1>
      </Link>
      <div className="nav-wrap">
        <Nav />
      </div>
    </header>
  );
};

export default SideBar;
