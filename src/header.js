import React from "react";
import styled from "styled-components";

function Header(props) {

    const Topnav = styled.nav`
        margin: 0 auto;
        width: 50%;
        display: flex;
        justify-content: space-around;
        padding: 5px 0 20px 0;
    `

    const Anchors = styled.a`
        color: white;
        padding: 10px 25px;
        background-color: purple;
        border: 2px solid black;
        border-radius: 10px;
        text-decoration: none;
        font-size: 18px;

        &:hover {
            background-color: black;
        }
    `

    return (
        <Topnav>
            <Anchors href={props.link} target="_blank">{props.website}</Anchors>
            <Anchors href="https://www.nasa.gov/multimedia/imagegallery/iotd.html" target="_blank">More Pictures</Anchors>
        </Topnav>
    );
}

export default Header