import React, { useState } from 'react';
import Grid from './components/Grid';
import getPrimeNumbers from './helpers/getPrimeNumbers';
import getMultiplicationGrid from './helpers/getMultiplicationGrid';

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
        <label data-testid="input-lbl"> Prime numbers count: </label>
        <input type="text" name="noCount" data-testid="no-count-tb" />
        <input
          type="submit"
          name="submitBtn"
          value="Go!"
          data-testid="submit-btn"
        />
      </form>
      <Grid data={grid} />
    </>
  );
};

export default App;
