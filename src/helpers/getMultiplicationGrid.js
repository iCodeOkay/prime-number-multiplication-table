const getMultiplicationGrid = (numbersArray) => {
  const grid = [];
  numbersArray.forEach((row) => {
    const rowObject = {
      yLabel: row,
      children: [],
    };
    numbersArray.forEach((column) => {
      rowObject.children.push({
        xLabel: column,
        xyValue: column * row,
      });
    });

    grid.push(rowObject);
  });

  return grid;
};

export default getMultiplicationGrid;
