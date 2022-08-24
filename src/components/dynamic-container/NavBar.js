import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export default function NavBar() {
  return (
    <nav id="nav-bar">
      <Link className="nav-link" to="/top">
        &nbsp;&nbsp;Top 8&nbsp;&nbsp;&#9959;
      </Link>
      <Link className="nav-link" to="/">
        &nbsp;&nbsp;Bands&nbsp;&nbsp;&#9959;
      </Link>
      <Link className="nav-link" to="/pics">
        &nbsp;&nbsp;About Me&nbsp;&nbsp;&#9959;
      </Link>
      <Link className="nav-link" to="/diary">
        &nbsp;&nbsp;Diary&nbsp;&nbsp;
      </Link>
    </nav>
  )
}
