import React, { useState, useEffect } from "react"
import "./Top.css"
import FriendCard from "./FriendCard"

export default function Top() {
  const [friends, setFriends] = useState([])

  useEffect(() => {
    fetch("https://t-e-db.herokuapp.com/friends")
      .then((r) => r.json())
      .then((data) => setFriends(data))
  }, [])

  let friendCardsA = friends.slice(0, 4)
  let friendCardsB = friends.slice(4, 8)

  friendCardsA = friendCardsA.map((friend) => {
    return (
      <FriendCard
        id={friend.name}
        image={friend.image}
        name={friend.name}
        key={friend.id}
      />
    )
  })

  friendCardsB = friendCardsB.map((friend) => {
    return (
      <FriendCard
        id={friend.name}
        image={friend.image}
        name={friend.name}
        key={friend.id}
      />
    )
  })

  // add const to map over friend array

  return (
    <div id="top">
      <h1>Darian's Friend Space</h1>
      <div className="friend-cards">
        <div id="column-1">{friendCardsA}</div>
        <div id="column-2">{friendCardsB}</div>
      </div>
    </div>
  )
}
