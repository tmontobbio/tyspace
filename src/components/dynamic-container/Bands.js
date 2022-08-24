import React, { useEffect, useState } from "react"
import BandCard from "./BandCard"
import "./Bands.css"

export default function Bands() {
  const [bands, setBands] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/bands")
      .then((r) => r.json())
      .then((data) => setBands(data))
  }, [])

  const renderBands = bands.map((band) => {
    return <BandCard key={band.id} image={band.image} name={band.name} />
  })

  return <div id="bands">{renderBands}</div>
}
