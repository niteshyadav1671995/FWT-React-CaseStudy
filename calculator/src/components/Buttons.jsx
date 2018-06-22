import React from 'react';
import '../styles/button.css';

import PropTypes from 'prop-types';

const Buttons = ({ handleEvent, calExp }) => (
  <div className="inputFrame">
    <div className="inputButton">
      <button className="buttonValue" value="1" type="button" onClick={handleEvent}>
      1
      </button>
      <button className="buttonValue" value="2" type="button" onClick={handleEvent}>
      2
      </button>
      <button className="buttonValue" value="3" type="button" onClick={handleEvent}>
      3
      </button>
      <button className="buttonValue" value="+" type="button" onClick={handleEvent}>
      +
      </button>
    </div>
    <div className="inputButton">
      <button className="buttonValue" value="4" type="button" onClick={handleEvent}>
      4
      </button>
      <button className="buttonValue" value="5" type="button" onClick={handleEvent}>
      5
      </button>
      <button className="buttonValue" value="6" type="button" onClick={handleEvent}>
      6
      </button>
      <button className="buttonValue" value="-" type="button" onClick={handleEvent}>
      -
      </button>
    </div>
    <div className="inputButton">
      <button className="buttonValue" value="7" type="button" onClick={handleEvent}>
      7
      </button>
      <button className="buttonValue" value="8" type="button" onClick={handleEvent}>
      8
      </button>
      <button className="buttonValue" value="9" type="button" onClick={handleEvent}>
      9
      </button>
      <button className="buttonValue" value="*" type="button" onClick={handleEvent}>
      *
      </button>
    </div>
    <div className="inputButton">
      <button className="buttonValue" value="=" type="button" onClick={calExp}>
      =
      </button>
      <button className="buttonValue" value="0" type="button" onClick={handleEvent}>
      0
      </button>
      <button className="buttonValue" value="." type="button" onClick={handleEvent}>
      .
      </button>
      <button className="buttonValue" value="/" type="button" onClick={handleEvent}>
      /
      </button>
    </div>
  </div>
);

Buttons.propTypes = {
  handleEvent: PropTypes.func.isRequired,
  calExp: PropTypes.func.isRequired,
};

export default Buttons;
