import React from "react"
import "./AboutMe.css"

export default function AboutMe() {
  return (
    <div id="about-me-div" className="child-div">
      <div id="name-div">
        <h3>꧁ ঔৣ☬✞ Darian ✞☬ঔৣ ꧂</h3>
      </div>
      <span id="bio-span">
        <ul id="bio-list">
          <li>Male</li>
          <li>17</li>
          <li>Lost</li>
          <li>Cali</li>
          <li>Last login: 08/12/2008</li>
        </ul>
      </span>
      <div id="mood-div">
        <p>Mood: 😐</p>
      </div>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmJVZ5Zjeb8FXB4j9zOJhuYzMrTk6JES0J1w&usqp=CAU"
        alt="profile-img"
        id="profile-image"
        className="img-fluid"
      />
    </div>
  )
}
