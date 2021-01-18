import React from 'react';
import ReactDOM from 'react-dom';

function Joke(props){
    return(
        <div>
        <h3 style={{display: !props.question && "none" }}>Question: {props.question}</h3>
        <h3>Punchline: {props.answer}</h3>
        <hr />
        </div>
    )
}


export default Joke; 