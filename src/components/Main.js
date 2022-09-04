import React from "react"
export default function Main(){
    return (
        <div className="Main">
            <div className="main-information">
                <h1 className="main--name">Laura Smith</h1>
                <h4 className="main--name">Frontend Developer</h4>
                <h4 className="main--website">laurasmith.website</h4>
            </div>
            <div className="main-button-navigation">
                <button  icon="fa-solid" className="btn btn-email">Email</button>
                <button className="btn btn-linkedIn">LinkedIn</button>
            </div>
            <div className="main-bio-container">
                <div className="main-about">
                    <h4>About</h4>
                    <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
                </div>
                <div className="main-interest">
                    <h4>Interest</h4>
                    <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
                </div>
            </div>
     
        </div>
    )
}

