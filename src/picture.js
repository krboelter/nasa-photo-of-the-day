import React from "react"

function NasaImage(props) {
    return (
        <div>
            <h2 className="title">{props.title}</h2>
            <img src={props.url} alt={props.explanation} />
            <p className="explanation">{props.explanation}</p>
        </div>
    );
}

export default NasaImage