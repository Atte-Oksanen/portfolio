import React from "react";
import "./textElement.css"

class MyWork extends React.Component{
    render() {
        return (
            <>
            <div class = "textElement" id = "myWork">
            <h2>
                ACHIEVEMENTS
            </h2>
            <p>
                My list of career achievements in software development might be short, but that does not mean i haven't been busy. In between university semesters I have worked in IT-support,
                which really gave me a unique insight to the complete other end of the CI/CD pipelines. In addition to maintaining and providing support to a plethera of systems, 
                I got to see how people in general work with computers and where the most amount of hiccups in the interaction happened.
                <br></br>
                <br></br>
                From the list of my personal achievements, I think this website makes me the proudest. Even though it is not much by any means, it serves as a testament to my own ability
                to learn new things and adopt new technologies better than any other project I have made. Everything on this site is made by me including all the images and icons. 
                The decicion not to use any framework was delibirate, as I wanted to learn the basics "the hard way", so I would not be constrained to a single framework in the future.
            </p>
        </div>
        </>
        );
    }
}

export default MyWork;