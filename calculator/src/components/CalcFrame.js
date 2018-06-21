import React , {Component} from 'react';

import OutputBox from './output-box'
import Buttons from './Buttons'

class CalcFrame extends Component{
    constructor(){
        super();
        this.state = {
             result : ''
        }
    }

    handleEvent(event){
        var input = this.state.result + event.target.value
        this.setState({
            result : input
        })
    }

    calculateExpression(){
            var exp = this.state.result;
            var size = exp.length;
            var result = '';
            var check = /[0-9]/g.test(exp.charAt(size-1));
            if(check){
                result = eval(this.state.result)
            }
            else{
                result = "Invalid Expression"
            }
           
           this.setState({
           result : result
          })
    }

    clearResult(){
        this.setState({
            result : ''
        })
    }

    render(){
        return(
            <div>
                <OutputBox result = {this.state.result} clearOutput = {this.clearResult.bind(this)}/>
                <Buttons calExp = {this.calculateExpression.bind(this)} handleEvent = {this.handleEvent.bind(this)}/>
            </div>
        )
    }

}

export default CalcFrame;