import React, { useState } from 'react';
import Grid from './components/Grid';
import getPrimeNumbers from './helpers/getPrimeNumbers';
import getMultiplicationGrid from './helpers/getMultiplicationGrid';
import './App.css';

const App = () => {
  const [grid, setGrid] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    setGrid(getMultiplicationGrid(getPrimeNumbers(formData.get('noCount'))));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label> Prime numbers count: </label>
        <input type="text" name="noCount" />
        <input type="submit" name="submitBtn" value="Go!" />
      </form>
      <Grid data={grid} />
    </>
  );
};

export default App;
