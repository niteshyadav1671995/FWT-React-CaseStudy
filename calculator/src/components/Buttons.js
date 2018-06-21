import React , {Component} from 'react';
import RenderButton from './RenderButton';
import '../styles/button.css';

class Buttons extends Component{

   
    render(){
        return(
             <div className= "inputFrame" >
                <div className = "inputButton">
                    <button className = "buttonValue" value = "1" onClick = {this.props.handleEvent}>1</button>
                    <button className = "buttonValue" value = "2" onClick = {this.props.handleEvent}>2</button>
                    <button className = "buttonValue" value = "3" onClick = {this.props.handleEvent}>3</button>
                    <button className = "buttonValue" value = "+" onClick = {this.props.handleEvent}>+</button>
                </div>
                <div className = "inputButton">                   
                    <button className = "buttonValue" value = "4" onClick = {this.props.handleEvent}>4</button>
                    <button className = "buttonValue" value = "5" onClick = {this.props.handleEvent}>5</button>
                    <button className = "buttonValue" value = "6" onClick = {this.props.handleEvent}>6</button>
                    <button className = "buttonValue" value = "-" onClick = {this.props.handleEvent}>-</button>
                </div>
                <div className = "inputButton">
                    <button className = "buttonValue" value = "7" onClick = {this.props.handleEvent}>7</button>
                    <button className = "buttonValue" value = "8" onClick = {this.props.handleEvent}>8</button>
                    <button className = "buttonValue" value = "9" onClick = {this.props.handleEvent}>9</button>
                    <button className = "buttonValue" value = "*" onClick = {this.props.handleEvent}>*</button>
                </div>
                <div className = "inputButton">
                    <button className = "buttonValue" value = "=" onClick = {this.props.calExp}>=</button>
                    <button className = "buttonValue" value = "0" onClick = {this.props.handleEvent}>0</button>
                    <button className = "buttonValue" value = "." onClick = {this.props.handleEvent}>.</button>
                    <button className = "buttonValue" value = "/" onClick = {this.props.handleEvent}>/</button>
                </div>
                </div>
        )
    }
}
export default Buttons