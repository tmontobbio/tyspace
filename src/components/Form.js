import React, { useState } from "react"
import "./Form.css"

export default function Form({ handleSubmission, visible, setVisible }) {
  const [newComment, setNewComment] = useState({
    name: "",
    body: "",
  })

  function handleCommentValues(e) {
    const name = e.target.name
    const value = e.target.value
    setNewComment({ ...newComment, [name]: value })
  }

  function handlePost(e) {
    e.preventDefault()

    fetch("http://localhost:3001/comments", {
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
          onChange={handleCommentValues}
          label="Name"
          type="text"
          placeholder="Name"
          value={newComment.name}
          name="name"
        ></input>
        <br />
        <input
          onChange={handleCommentValues}
          label="Body"
          type="text"
          placeholder="Body"
          value={newComment.body}
          name="body"
        ></input>
        <br />
        <button>Post</button>
      </form>
    </div>
  )
}
