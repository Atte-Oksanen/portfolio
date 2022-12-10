import React from "react";
import "../css/floatingImages.css"
import header from "../resources/header.jpg"
import header_small from "../resources/header_small.jpg"

class FloatingImages extends React.Component {
    componentDidMount () {
        const boundingBox = document.getElementById("aboutMe").getBoundingClientRect();
        const midX = boundingBox.left + boundingBox.width / 2;
        const midY = boundingBox.top + boundingBox.height / 2;
    
        document.addEventListener("mousemove", (e) => {
            const mouseX = e.clientX;
            const mouseY = e.clientY;
            const xSmallImage = -15 + (midX - mouseX) / 400 + "%";
            const ySmallImage = -30 + (midY - mouseY) / 400 + "%";
            const xLargeImage = -60 + (-1 * (midX - mouseX) / 400) + "%";
            const yLargeImage = -50 + (-1 * (midY - mouseY) / 400) + "%";
            const xSmallBorder = 13 + (midX - mouseX) / 400 + "%";
            const ySmallBorder = -34 + (midY - mouseY) / 400 + "%";
            const xLargeBorder = -1 * (midX - mouseX) / 500 + "%";
            const yLargeBorder = -1 * (midY - mouseY) / 500 + "%";
        
            document.getElementById("small_image_border").style.marginTop = ySmallBorder;
            document.getElementById("small_image_border").style.marginLeft = xSmallBorder;
            document.getElementById("large_image_border").style.marginLeft = xLargeBorder;
            document.getElementById("large_image_border").style.marginTop = yLargeBorder;
            document.getElementById("large_image").style.marginTop = yLargeImage;
            document.getElementById("large_image").style.marginLeft = xLargeImage;
            document.getElementById("small_image").style.marginTop = ySmallImage;
            document.getElementById("small_image").style.marginLeft = xSmallImage;
        })
    }
    render() {
        return (
            <div class = "header_image">
                <div id = "large_image_border">
                    <img src={header} alt="" id = "large_image"></img>
                </div>
                <div id = "small_image_border">
                    <img src={header_small} alt="" id = "small_image"></img>
                </div>
            </div>  
        );
    }
}

export default FloatingImages;