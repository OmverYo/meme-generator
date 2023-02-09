import React from "react"
import "./../style.css"
import TrollFace from "./../images/troll-face.jpg"

export default function Header() {
    return (
        <header className="header">
            <img src={TrollFace} className="header--image" alt="TrollFace"></img>
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React Course - Project 3</h4>
        </header>
    )
}