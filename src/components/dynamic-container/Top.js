import React, { useState, useEffect} from "react"
import "./Top.css"
import FriendCard from "./FriendCard"

export default function Top() {

  const [friends, setFriends] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/friends")
      .then((r) => r.json())
      .then((data) => setFriends(data))
  }, [])

  const friendCard = friends.map((friend) => {
   return <FriendCard id={friend.name} image={friend.image} name={friend.name} key={friend.id}/>
  })


  // add const to map over friend array

  return (
  <div id="top">
    <h1>EMO KID's Friend Space</h1>
      <div>
        {friendCard}
      </div>

  </div>
  )
}
