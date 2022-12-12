import React from "react";
import CV from "./Cv";
import LIlogo from "../resources/LI-In-Bug.png"
import GHlogo from "../resources/github-mark.png"
import "../css/textElement.css"

class ContactMe extends React.Component{
    render() {
        return (
            <>
            <div class = "textElement" id = "contact">
            <h2>
                WHERE TO FIND ME?
            </h2>
            <p>
                In addition to just bumping to me on campus, you can find me in these places:
                <ul>
                    <li>
                        <a href="https://www.linkedin.com/in/atte-o/" target={"_blank"} rel="noreferrer"><img src={LIlogo} alt=""></img>LinkedIn</a>
                        <a href="https://github.com/Atte-Oksanen" target={"_blank"} rel="noreferrer"><img src={GHlogo} alt=""></img>Github</a>
                    </li>    
                </ul>
                If I got you interested, more information can be found in my <CV />.
            </p>
        </div>
        </>
             
        );
    }
}

export default ContactMe;