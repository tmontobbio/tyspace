import React from "react"

function FriendCard( {name, image, id, key} ) {
    return (
        <div className="friend-card" id={id} key={key} >
            <h1>{name}</h1>
                <img src={image} alt={name} /> 
        </div>
    )
}

export default FriendCard
