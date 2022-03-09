import React from 'react'
export default function Intro(props) {
    return (
        <div className="intro-container">
            <svg className="blob-1" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#FFFAD1" d="M52.7,-57.9C61.5,-44,57,-22,56.5,-0.5C55.9,20.9,59.3,41.8,50.6,51.1C41.8,60.4,20.9,58.1,2.5,55.6C-15.9,53.1,-31.7,50.3,-40.8,41C-49.9,31.7,-52.1,15.9,-53.3,-1.1C-54.4,-18.1,-54.4,-36.3,-45.4,-50.3C-36.3,-64.3,-18.1,-74.1,1.9,-76C22,-77.9,44,-71.9,52.7,-57.9Z" transform="translate(100 100)" />
            </svg>
            <h1>Quizzical</h1>
            <button onClick={props.handleClick}>Start quiz</button>
            <svg className="blob-2" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#DEEBF8" d="M64.5,-54C77.2,-35.5,76.7,-9.1,69.6,13.5C62.5,36,48.9,54.7,33.5,57.5C18,60.3,0.7,47.4,-15,37.4C-30.7,27.4,-44.8,20.4,-52.6,6.3C-60.4,-7.9,-61.9,-29.3,-52.1,-47.1C-42.3,-64.9,-21.2,-79.3,2.4,-81.2C25.9,-83.1,51.8,-72.6,64.5,-54Z" transform="translate(100 100)" />
            </svg>
        </div>
    )
}