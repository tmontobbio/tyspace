import "./MainContainer.css"
import React, { useEffect, useState } from "react"
import Form from "./Form"
import DynamicContainer from "./dynamic-container/DynamicContainer.js"
import AboutMe from "./AboutMe"

export default function MainContainer() {
  const [comments, setComments] = useState([])
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    fetch("http://localhost:3001/comments")
      .then((r) => r.json())
      .then((data) => setComments(data))
  }, [])

  // cant figure out what keys to give these
  const renderComments = comments.map((comment) => {
    return (
      <div className="comment" key={comment.id}>
        <h5 id="comment-title">&#9959; {comment.name} &#9959;</h5>
        <p id="comment-body">{comment.body}</p>
      </div>
    )
  })

  function handleSubmission(newComment) {
    setComments([...comments, newComment])
  }
  function formVisible() {
    setVisible(!visible)
  }

  return (
    <div id="main-div">
      <AboutMe />
      <div id="spotify-container" className="child-div">
        <iframe
          id="spotify-player"
          title="playlist"
          src="https://open.spotify.com/embed/playlist/5dOZtEXmEGHxcnMlJxm0vo?utm_source=generator"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        ></iframe>
      </div>
      <div id="page-url" className="child-div">
        <h4>http://www.flatspace.com/consumed_by_shadows</h4>
      </div>
      <div id="dynamic-container-container" className="child-div">
        {<DynamicContainer />}
      </div>
      <div id="comments" className="child-div">
        <span>
          <h3>Darian's Friend's Comments:</h3>
        </span>
        <button id="form-hide-show" onClick={formVisible}>
          Comment
        </button>
        {visible ? (
          <Form
            visible={visible}
            setVisible={setVisible}
            handleSubmission={handleSubmission}
          />
        ) : null}
        {renderComments}
      </div>
    </div>
  )
}
