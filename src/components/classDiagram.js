import React from "react";
import "../css/classDiagram.css"

class Diagram extends React.Component{
    render() {
        return (
             <div className="classDiagram">
                <h3>ClassName</h3>
                    <ul id="attribute">
                        <li>
                            -a:double
                        </li>
                        <li>
                            -b:double
                        </li>
                    </ul>
                    <ul id="method">
                        <li>
                            -a:double
                        </li>
                        <li>
                            -b:double
                        </li>
                    </ul>
             </div>
        );
    }
}

export default Diagram;