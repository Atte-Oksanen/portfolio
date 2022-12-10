import React from "react";
import '../css/typeWriter.css'
class TypeWriter extends React.Component {
  componentDidMount() {
  var dataText = ['stranger','co-worker', 'colleague', 'future boss?', 'friend', 'partner', 'collaborator', 'pal', 'chief', 'recruiter'];
      
  function typeWriter(text, i, fnCallback) {
    if (i < (text.length)) {
      document.getElementById("text").innerHTML = text.substring(0, i+1);
      setTimeout(function() {
        typeWriter(text, i + 1, fnCallback)
      }, 80);
    }

    else if (typeof fnCallback == 'function') {
      setTimeout(fnCallback, 200);
    }
  }

  function StartTextAnimation(i) {
    if (typeof dataText[i] == 'undefined'){
      setTimeout(function() {
        StartTextAnimation(0);
      }, 2000);
    }

    if (i < dataText.length) {
      typeWriter(dataText[i], 0, function(){
        setTimeout(function(){
          reverseTextAnimation(dataText[i]);
        }, 500);
        setTimeout(function(){
          StartTextAnimation(i + 1);
        }, 2000);
      });
    }
  }

  function reverseTextAnimation(name){
    let stringlen = name.length;
    let temp;
    
    if(stringlen > 0){
      temp = name.slice(0, stringlen - 1);
      document.getElementById("text").innerHTML = temp;
      setTimeout(function() {
        reverseTextAnimation(temp);
      }, 65);
    }
  }
  StartTextAnimation(0);
}
render() {
  return(
    <>
    <span><br></br></span>
    <span id = "text">Stranger</span>
    </>
  );}

}
export default TypeWriter;
