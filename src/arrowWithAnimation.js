import React from "react";
import "./arrowWithAnimation.css"

class Arrow extends React.Component{
    render(){
        return(
            <svg width="150" height="150" viewBox="-70 -50 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="arrow_down">
                    <path id="Arrow 1" d="M78.5 31C78.5 29.067 76.933 27.5 75 27.5C73.067 27.5 71.5 29.067 71.5 31H78.5ZM72.5251 113.475C73.892 114.842 76.108 114.842 77.4749 113.475L99.7487 91.201C101.116 89.8342 101.116 87.6181 99.7487 86.2513C98.3819 84.8844 96.1658 84.8844 94.799 86.2513L75 106.05L55.201 86.2513C53.8342 84.8844 51.6181 84.8844 50.2513 86.2513C48.8844 87.6181 48.8844 89.8342 50.2513 91.201L72.5251 113.475ZM71.5 31V111H78.5V31H71.5Z"/>
                    </g>
                </svg>
        )
    }
}

export default Arrow;