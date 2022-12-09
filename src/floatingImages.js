import React from "react";
import "./floatingImages.css"
import header from "./resources/header.jpg"
import header_small from "./resources/header_small.jpg"

class FloatingImages extends React.Component {
    componentDidMount () {
        document.addEventListener("mousemove", (e) => {
            try {
            const mouseX = e.clientX;
            const mouseY = e.clientY;
            const boundingBox = document.getElementById("aboutMe").getBoundingClientRect();
            const midX = boundingBox.left + boundingBox.width / 2;
            const midY = boundingBox.top + boundingBox.height / 2;
        
            const xSmallImage = Number((-120 + (midX - mouseX) / 80).toFixed()) + "px";
            const ySmallImage = Number((-300 + (midY - mouseY) / 80).toFixed()) + "px";
            const xLargeImage = Number((-50 + -1 * (midX - mouseX) / 100).toFixed()) + "px";
            const yLargeImage = Number((-50 + -1 * (midY - mouseY) / 100).toFixed()) + "px";
            const xSmallBorder = 35 + (midX - mouseX) / 400 + "%";
            const ySmallBorder = 95 + (midY - mouseY) / 400 + "%";
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
            } catch (error) {}
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