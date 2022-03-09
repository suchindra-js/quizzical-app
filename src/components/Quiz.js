import React from 'react'

export default function Quiz(props) {
    return (
        <div className="quiz-container">
            <h2>{props.question}</h2>
            <div className="answers">
                {props.answers.map(answer => 
                    <button
                        style={
                            !props.ansReveal ?
                            {backgroundColor: props.clicked === answer ? "#D6DBF5" : "transparent"} :
                            {backgroundColor: props.clicked === answer && props.clicked === props.correctAns ? "#94D7A2" : props.clicked === answer && props.clicked !== props.correctAns ? "#F8BCBC" : "transparent"}
                            }
                        onClick={() => props.selectAns(props.id, answer)}
                    >
                    {answer}
                    </button>)
                }
            </div>
            <hr/> 
        </div>
    )
}