import React from "react";
import styled from "styled-components";

function Header(props) {

    const Topnav = styled.nav`
        margin: 0 auto;
        width: 50%;
        display: flex;
        justify-content: space-around;
        padding-top: 10px;
    `

    const Anchors = styled.a`
        color: white;
        padding: 10px 25px;
        background-color: purple;
        border: 2px solid black;
        border-radius: 10px;
        text-decoration: none;
        font-size: 25px;
        
        & : hover{
            background-color: black;
        }
    `

    return (
        <Topnav>
            <Anchors href="#">Home</Anchors>
            <Anchors href={props.link} target="_blank">{props.website}</Anchors>
        </Topnav>
    );
}

export default Header