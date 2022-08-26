import React from "react"
import "./Diary.css"

export default function DiaryCard({ title, body, date }) {
  return (
    <div className="diary-card">
      <h3 className="diary-title">{title}</h3>
      <p className="diary-date">{date}</p>
      <p className="diary-body">{body}</p>
    </div>
  )
}
