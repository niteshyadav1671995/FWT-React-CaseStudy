import React, { Component } from 'react';

import OutputBox from './output-box';
import Buttons from './Buttons';

class CalcFrame extends Component {
  constructor() {
    super();
    this.state = {
      result: '',
    };
    this.calculateExpression = this.calculateExpression.bind(this);
    this.handleEvent = this.handleEvent.bind(this);
    this.clearResult = this.clearResult.bind(this);
  }

  handleEvent(event) {
    const { result } = this.state;
    const input = result + event.target.value;
    this.setState({
      result: input,
    });
  }

  calculateExpression() {
    const { result } = this.state;
    const exp = result;
    const size = exp.length;
    let result2 = '';
    const check = /[0-9]/g.test(exp.charAt(size - 1));
    if (check) {
      result2 = eval(result);
    } else {
      result2 = 'Invalid Expression';
    }
    this.setState({
      result: result2,
    });
  }

  clearResult() {
    this.setState({
      result: '',
    });
  }

  render() {
    const { result } = this.state;
    console.log(result);
    return (
      <div>
        <OutputBox result={result} clearOutput={this.clearResult} />
        <Buttons calExp={this.calculateExpression} handleEvent={this.handleEvent} />
      </div>
    );
  }
}

export default CalcFrame;
