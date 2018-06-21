import React, {Component} from 'react';
import '../styles/button.css';
class OutputBox extends Component{

    render(){
        return(
            <div>
            <input className = "inputbox" type="text" value = {this.props.result}/>
            <button className = "allClear" onClick = {this.props.clearOutput}>AC</button>
            </div>
        )
    }

}

export default OutputBox;