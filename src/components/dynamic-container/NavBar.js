import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export default function NavBar() {
  return (
    <nav id="nav-bar">
      <Link className="nav-link" to="/">
        &nbsp;&nbsp;Top 8&nbsp;&nbsp;𖤐
      </Link>
      <Link className="nav-link" to="/bands">
        &nbsp;&nbsp;Bands&nbsp;&nbsp;𖤐
      </Link>
      <Link className="nav-link" to="/bio">
        &nbsp;&nbsp;Bio&nbsp;&nbsp;𖤐
      </Link>
      <Link className="nav-link" to="/diary">
        &nbsp;&nbsp;Diary&nbsp;&nbsp;
      </Link>
    </nav>
  )
}
