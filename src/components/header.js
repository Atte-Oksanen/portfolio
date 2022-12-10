import React from "react";
import TypeWriter from "./typewriter";
import Arrow from "./arrowWithAnimation";
import "../css/header.css"
import AnimatedButton from "./animatedButton";


class Header extends React.Component {
    render() {
        return(
            <>
            <div className="header">
                <h1>
                    Hi there, 
                    <TypeWriter />
                </h1>
                <p> 
                    and welcome.
                    <br></br>
                    This site is my personal study into UI/UX design and an extension to my CV.
                    <br></br>
                    I hope that you will enjoy your time here
                </p>
                <AnimatedButton />
                <Arrow />
            </div>
            </>
        )
    }
}

export default Header;