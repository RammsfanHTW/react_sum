import React from 'react';
import './App.css';
import propTypes from 'prop-types';

const App = ({ a, b }) => (
  <h1>
    {
      `Sum of ${a} and ${b} = ${a + b}`
    }
  </h1>
);

App.propTypes = {
  a: propTypes.number.isRequired,
  b: propTypes.number.isRequired,
};

export default App;
