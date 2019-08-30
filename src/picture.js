import React from "react";
import styled from "styled-components";

function NasaImage(props) {

    const Header = styled.h2`
        margin: 15px auto;
        color: dodgerblue;
    `

    const Image = styled.img`
        margin: 15px auto;
        width: 60%;
        height: 400px;
        object-fit: contain;
    `

    const Paragraph = styled.p`
        margin: 25px auto;
        width: 80%;
        height: 175px;
        font-size: 12px;
    `

    return (
        <div>
            <Header>{props.title}</Header>
            <Image src={props.url} alt={props.explanation} />
            <Paragraph>{props.explanation}</Paragraph>
        </div>
    );
}

export default NasaImage