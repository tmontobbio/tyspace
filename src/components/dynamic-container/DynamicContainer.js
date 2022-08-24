import NavBar from "./NavBar"
import Bands from "./Bands"
import Diary from "./Diary"
import Top from "./Top"
import AboutMe from "./AboutMe"
import React from "react"
import { Switch, Route } from "react-router-dom"
import "./DynamicContainer.css"
//import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

export default function DynamicContainer() {
  return (
    <div id="dynamic-container">
      <NavBar />
      <Switch>
        <Route path="/pics">
          <AboutMe />
        </Route>
        <Route path="/top">
          <Top />
        </Route>
        <Route path="/diary">
          <Diary />
        </Route>
        <Route exact path="/">
          <Bands />
        </Route>
        <Route path="*">
          <h1>404 not found</h1>
        </Route>
      </Switch>
    </div>
  )
}
