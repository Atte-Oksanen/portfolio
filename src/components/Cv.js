import React from "react";
import pdf from "../resources/CV_2022.pdf"


class CV extends React.Component{
    render() {
        return (
             <a href={pdf} target={"_blank"} rel="noreferrer" style={{color: "var(--textColor"}}>CV</a>
        );
    }
}

export default CV;