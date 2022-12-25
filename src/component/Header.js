import React from "react"
import "../index.css"

export default function Heaader(){
    return (
        <header className="header">
            <img 
                src="../images/troll-face.png"
                className="header--image"
                alt=""
            />
            <h2 className="header--title">Meme Generator</h2>
        </header>
    )
}