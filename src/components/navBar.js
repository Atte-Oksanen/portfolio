import React from "react";
import "../css/navBar.css"

class NavBar extends React.Component{
    render() {
        return (
            <nav>
            <div class="nav_links">
                <ul>
                    <li><a href="#top">HOME</a></li>
                    <li><a href="#aboutMe">ME</a></li>
                    <li><a href="#myWork">ACHIEVEMENTS</a></li>
                    <li><a href="#contact">CONTACT ME</a></li>
                </ul>
            </div>
        </nav>
        );
    }
}

export default NavBar;