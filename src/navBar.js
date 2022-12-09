import React from "react";
import "./navBar.css"

class NavBar extends React.Component{
    render() {
        return (
            <nav>
            <div class="nav_links">
                <ul>
                    <li><a href="#top">HOME</a></li>
                    <li><a href="#aboutMe">ME</a></li>
                    <li><a href="#myWork">ACHIEVEMENTS</a></li>
                    <li><a href="resources/testfile.pdf" target="_blank">CONTACT ME</a></li>
                </ul>
            </div>
        </nav>
        );
    }
}

export default NavBar;