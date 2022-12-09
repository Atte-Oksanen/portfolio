import React from "react";
import "./textElement.css"
import FloatingImages from "./floatingImages";

class AboutMe extends React.Component{
    render() {
        return (
            <>
                <div class="textElement" id="aboutMe">
                    <h2>
                        ABOUT ME
                    </h2>
                    <p>
                        I am a second year information processing science student from the University of Oulu with a burning passion for everything computer related. 
                        From hardware to software, I am always interested and keen to learn new things. Even though my studies focus heavily on the computing part of computers,
                        in my free time I have become somewhat of a front-end hobbyist, hoping to become a more well rounded in my craft. 
                        <br></br>
                        <br></br>
                        Even though true beauty is on the inside, a good UI never hurts.
                    </p>
                    <FloatingImages />
            </div>
        </>
        );
    }
}

export default AboutMe;