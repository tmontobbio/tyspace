import React, { useState } from "react"
import "./Form.css"

export default function Form({ handleSubmission, visible, setVisible }) {
  const [newComment, setNewComment] = useState({
    name: "",
    body: "",
  })

  function handleCommentValues(e) {
    const name = e.target.name
    const body = e.target.value
    setNewComment({ ...newComment, [name]: body })
  }

  function handlePost(e) {
    e.preventDefault()

    fetch("https://t-e-db.herokuapp.com/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newComment),
    })
      .then((r) => r.json())
      .then((data) => handleSubmission(data))
    setVisible(!visible)
  }

  return (
    <div>
      <form id="comment-form" onSubmit={handlePost}>
        <input
          id="name"
          onChange={handleCommentValues}
          label="Name"
          type="text"
          placeholder="Name"
          value={newComment.name}
          name="name"
        ></input>
        <br />
        <input
          id="body"
          onChange={handleCommentValues}
          label="Body"
          type="text"
          placeholder="Body"
          value={newComment.body}
          name="body"
        ></input>
        <br />
        <button id="submit-button">Send</button>
      </form>
    </div>
  )
}
