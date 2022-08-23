import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav id="nav-bar">
      <Link className="nav-link" to="/top">
        Top 8|
      </Link>
      <Link className="nav-link" to="/">
        Bands|
      </Link>
      <Link className="nav-link" to="/pics">
        Pics|
      </Link>
      <Link className="nav-link" to="/diary">
        Diary
      </Link>
    </nav>
  );
}
