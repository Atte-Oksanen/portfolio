import React from "react";
import "../css/computerOnFire.css"
import codeSnippet from "../resources/codeSnippet.txt"
import randomChars from "../resources/randomChars.txt"



class Computer extends React.Component {
    componentDidMount() {
        var snippet;
        fetch(codeSnippet)
            .then(input => input.text())
            .then(input => snippet = input)
            .then(input => startAnimation(input, 1000, 1000))
    
    function startAnimation(input, start, index){
        if(index === 1000 + start){
            start = index;
        }
        if(input[index] === "<" || input[index] === "/"){}
        else{
            document.getElementById("generatedCode").innerHTML = input.substring(start, index + 1);
        }
        if(typeof input[index] !== "undefined"){
            setTimeout(() => {
                startAnimation(input, start, index + 1)
            }, 10);
        }
        else{
            setTimeout(() =>{
                compileAnimation(0, "Compiling ::::::::::");
            }, 2000)
            
        }
    }

    function compileAnimation(counter , string){
        const stringCopy = string;
        if(counter === 0){
            setTimeout(() => {
                document.getElementById("generatedCode").innerHTML = string;
                compileAnimation(counter + 1, string);
            }, 200);
        }
        else if(counter < 11){
            let stringCopy = string.replace(":", "/");
            setTimeout(() => {
                document.getElementById("generatedCode").innerHTML = stringCopy;
                compileAnimation(counter + 1, stringCopy);
            }, 200);
        }

        else{
            document.getElementById("generatedCode").innerHTML = stringCopy + "<br><br/><br><br/>Running the program..."
            setTimeout(() => {
                fetch(randomChars)
                .then(chars => chars.text())
                .then(chars => programRunning(chars, 0));
            }, 500);
        }
    }

    function programRunning(input, index){
        if(typeof input[index] !== "undefined"){
            setTimeout(() => {
                document.getElementById("generatedCode").innerHTML = input.substring(0, index + 1);
                programRunning(input, index + 1);
            }, 2)
        }

        else{
            setTimeout(() => {
                startAnimation(snippet, 0, 0)
            }, 4000);
        }
    }


    }
    
    
    render() {
        return (
            <div className="computerOnFire">
                <section id="anchor"><span id="generatedCode"></span></section>
                <svg width="25rem" height="25rem" viewBox="0 0 108 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M68 72H40V84H68V72ZM46 75C44.3431 75 43 76.3431 43 78C43 79.6569 44.3431 81 46 81H62C63.6569 81 65 79.6569 65 78C65 76.3431 63.6569 75 62 75H46Z" fill="#B9B9B9"/>
                <path d="M82.882 84H25.618C25.2393 84 24.893 84.214 24.7236 84.5528L22.7236 88.5528C22.3912 89.2177 22.8747 90 23.618 90H84.882C85.6253 90 86.1088 89.2177 85.7764 88.5528L83.7764 84.5528C83.607 84.214 83.2607 84 82.882 84Z" fill="#B9B9B9"/>
                <rect x="2.5" y="2.5" width="103" height="67" stroke="black" stroke-width="5" stroke-linejoin="round"/>
                </svg>
            </div>            
        );
    }
}

export default Computer;