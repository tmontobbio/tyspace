import React, { useState, useEffect } from "react"
import DiaryCard from "./DiaryCard"
import "./Diary.css"

export default function Diary() {
  const [entries, setEntries] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/diary")
      .then((r) => r.json())
      .then((data) => setEntries(data))
  }, [])

  const renderEntries = entries.map((entry) => {
    return (
      <DiaryCard
        key={entry.id}
        date={entry.date}
        title={entry.title}
        body={entry.body}
      />
    )
  })

  return <div id="diary-container">{renderEntries}</div>
}
