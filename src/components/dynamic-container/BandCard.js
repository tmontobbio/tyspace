import React from "react"
import "./Bands.css"

export default function BandCard({ image, name }) {
  return (
    <div className="band-card">
      <h3 className="band-name">{name}</h3>
      <img src={image} alt={image} className="band-image" />
    </div>
  )
}
