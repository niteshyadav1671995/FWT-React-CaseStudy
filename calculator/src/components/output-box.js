import React from 'react';
import '../styles/button.css';
import PropTypes from 'prop-types';

const OutputBox = ({
  result,
  clearOutput,
}) => (
  <div>
    <input className="inputbox" type="text" value={result} />
    <button className="allClear" type="button" onClick={clearOutput}>
    AC
    </button>
  </div>
);


OutputBox.propTypes = {
  result: PropTypes.string.isRequired,
  clearOutput: PropTypes.func.isRequired,
};

export default OutputBox;
