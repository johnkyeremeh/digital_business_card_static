import React from "react"
import heroImage from "../images/Rectangle 90.png"

export default function Navbar(){
    return (
        <nav className="nav">
            <img id="logo" alt="logo" className="nav--icon" src={heroImage}></img>
        </nav>
    )
}

