import React from 'react'
export default function Intro(props) {
    return (
        <>
            <div className="blob blob-1"></div>
            <div className="intro-container">
                <h1>Quizzical</h1>
                <button onClick={props.handleClick}>Start quiz</button>
            </div>
            <div className="blob blob-2"></div>
        </>
    )
}