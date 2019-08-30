import React from "react";
import styled from "styled-components";

function TopHeader() {

    const Header = styled.h1`
        margin: 0 auto 10px auto;
        padding-top: 10px;
        color: #ac00e6;
        text-shadow: 2px 2px 2px #00cc88;
    `

    const Paragraph = styled.p`
        font-family: Courier New;

        ${props => (props.color === "white" ? `color: white;` : null)}
        ${props => (props.color === "orange" ? `color: orange;` : null)}
        ${props => (props.color === "green" ? `color: green;` : null)}
    `

    return (
        <div>
            <Header color="red">Nasa Photo of the Day</Header>
            <Paragraph color="green">Below is a picture and a description taken by NASA. Check back tomorrow for a new NASA picture!</Paragraph>
            <Paragraph color="green">Select a date to change the image.</Paragraph>
        </div>
    )
}

export default TopHeader;