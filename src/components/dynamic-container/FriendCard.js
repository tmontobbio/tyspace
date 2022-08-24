import React from "react"
import "./Top.css"

function FriendCard( {name, image, id, key} ) {
    return (
        <div className="friend-card" id={id} key={key} >
            <p>{name}</p>
                <img src={image} alt={name} className="friend-card-image" /> 
        </div>
    )
}

export default FriendCard
