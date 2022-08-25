import React from "react"
import "./Bio.css"

export default function Bio() {
  return (
    <div id="bio">
      <div id="about">
        <table>
          <tr>
            <td className="prompt">Heroes:</td>
            <td className="value">Marilyn Manson</td>
          </tr>
          <tr>
            <td className="prompt">Status:</td>
            <td className="value">Single</td>
          </tr>
          <tr>
            <td className="prompt">Here for:</td>
            <td className="value">new music</td>
          </tr>
          <tr>
            <td className="prompt">Orientation:</td>
            <td className="value">unknown</td>
          </tr>
          <tr>
            <td className="prompt">Body type:</td>
            <td className="value">6', skinny jeans</td>
          </tr>
          <tr>
            <td className="prompt">Religion:</td>
            <td className="value">
              &#9959;&#9959;&#9959;&#9959;&#9959;&#9959;
            </td>
          </tr>
          <tr>
            <td className="prompt">Zodiac sign:</td>
            <td className="value">Scorpio</td>
          </tr>
          <tr>
            <td className="prompt">Smoke/Drink</td>
            <td className="value">yes/yes</td>
          </tr>
          <tr>
            <td className="prompt">Children:</td>
            <td className="value">No way</td>
          </tr>
          <tr>
            <td className="prompt">Someday:</td>
            <td className="value">I wish to excape this prison</td>
          </tr>
        </table>
      </div>
      <div id="youtube-div">
        <iframe
          className="player"
          width="525"
          height="295"
          src="https://www.youtube.com/embed/CsGYh8AacgY"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          className="player"
          width="525"
          height="295"
          src="https://www.youtube.com/embed/oQp7Id8iRA4"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          className="player"
          width="525"
          height="295"
          src="https://www.youtube.com/embed/J---aiyznGQ"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          className="player"
          width="525"
          height="295"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  )
}
