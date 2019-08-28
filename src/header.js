import React from "react";

function Header(props) {
    return (
        <nav className={props.nav}>
            <a href="#">Home</a>
            <a href={props.link}>{props.website}</a>
        </nav>
    );
}

export default Header