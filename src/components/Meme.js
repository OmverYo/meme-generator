import React from "react"

export default function Meme(props) {
    function getMemeImage() {
        console.log("Clicked")
    }
    return (
        <main>
            <form className="form">
                <input type="text" placeholder="Top Text" className="form--input"/>
                <input type="text" placeholder="Bottom Text" className="form--input"/>
                <button className="form--button" onClick={getMemeImage}>Get a new meme image</button>
            </form>
        </main>
    )
}