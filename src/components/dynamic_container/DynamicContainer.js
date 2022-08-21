import React, { useState } from "react"
import Blog from "./Blog"
import Pictures from "./Pictures"
import Friends from "./Friends"
import Interests from "./Interests"
import "./DynamicContainer.css"

export default function DynamicContainer() {
  const [page, setPage] = useState("/")

  function handleClick() {}

  function renderDiv() {
    switch (page) {
      case "/":
        return <Friends />
      case "/pictures":
        return <Pictures />
      case "/blog":
        return <blog />
      case "/interests":
        return <Interests />
      default:
        return <h1>404 not found</h1>
    }
  }

  return (
    <div id="container">
      <div id="nav-bar">
        <nav>
          <a onClick={handleClick} href="/">
            Blog &nbsp;|&nbsp;&nbsp;
          </a>
          <a onClick={handleClick} href="/about">
            Comments &nbsp;|&nbsp;&nbsp;
          </a>
          <a onClick={handleClick} href="/projects">
            Friends&nbsp; |&nbsp;&nbsp;
          </a>
          <a onClick={handleClick} href="/projects">
            Pictures
          </a>
        </nav>
      </div>
    </div>
  )
}

// function updateClicks(click) {
//   fetch("http://localhost:3001/clicks/1", {
//     method: "PATCH",
//     headers: { "Content-Type": "json/application" },
//     body: JSON.stringify(click),
//   })
//     .then((r) => r.json())
//     .then((data) => console.log(data))
// }
