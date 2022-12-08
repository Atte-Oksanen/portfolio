import React from "react";
import TypeWriter from "./typewriter";


class Header extends React.Component {
    render() {
        return(
            <div className="text_box">
                <h1>
                    Hi there, 
                    <TypeWriter />
                </h1>
                <button>Should we get started?</button>
            </div>
        )
    }
}

export default Header;