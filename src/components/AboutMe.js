import React from "react"
import "./AboutMe.css"

export default function AboutMe() {
  return (
    <div id="about-me" className="child-div">
      <div id="name-div">
        <h3>Profile Name</h3>
      </div>
      <span id="bio-div">
        <ul>
          <li>Male</li>
          <li>30 years old</li>
          <li>Sacramento</li>
          <li>California</li>
          <li>Last login: 08/12/2008</li>
        </ul>
      </span>
      <div id="mood-div">
        <p>Mood: 🤪</p>
      </div>
      <img
        src="https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"
        alt="dafaultimg"
        id="profile-image"
      />
    </div>
  )
}
