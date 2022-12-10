import React from "react";
import "../css/floatingImages.css"
import header from "../resources/header.jpg"
import header_small from "../resources/header_small.jpg"

class FloatingImages extends React.Component {
    componentDidMount () {
        const boundingBox = document.getElementById("large_image_border").getBoundingClientRect();
        const midX = boundingBox.left + boundingBox.width / 2;
        const midY = boundingBox.top + boundingBox.height / 2;
    
        document.addEventListener("mousemove", (e) => {
            const mouseX = e.clientX;
            const mouseY = e.clientY;
            const xSmallImage = -15 + (midX - mouseX) / 500 + "%";
            const ySmallImage = -30 + (midY - mouseY) / 500 + "%";
            const xLargeImage = -70 + (midX - mouseX) / 500 + "%";
            const xSmallBorder = 18 + (midX - mouseX) / 600 + "%";
            const ySmallBorder = -35 + (midY - mouseY) / 600 + "%";
            const xLargeBorder = -1 * (midX - mouseX) / 600 + "%";
            const yLargeBorder = -1 * (midY - mouseY) / 600 + "%";
        
            document.getElementById("small_image_border").style.marginTop = ySmallBorder;
            document.getElementById("small_image_border").style.marginLeft = xSmallBorder;
            document.getElementById("large_image_border").style.marginLeft = xLargeBorder;
            document.getElementById("large_image_border").style.marginTop = yLargeBorder;
            document.getElementById("large_image").style.marginLeft = xLargeImage;
            document.getElementById("small_image").style.marginTop = ySmallImage;
            document.getElementById("small_image").style.marginLeft = xSmallImage;
        })
    }
    render() {
        return (
            <>
            <div className = "header_image">
                <div id = "large_image_border">
                    <img src={header} alt="" id = "large_image"></img>
                </div>
                <div id = "small_image_border">
                    <img src={header_small} alt="" id = "small_image"></img>
                </div>
            </div>
            </>  
        );
    }
}

export default FloatingImages;