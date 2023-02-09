import React from "react"

export default function Meme() {
    return (
        <main>
            <form className="form">
                <input type="" placeholder="Top Text" className="form--input"/>
                <input type="" placeholder="Bottom Text" className="form--input"/>
                <button className="form--button">Get a new meme image</button>
            </form>
        </main>
    )
}