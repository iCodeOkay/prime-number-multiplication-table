import getMultiplicationGrid from './getMultiplicationGrid';

test('array with no numbers', () => {
  const array = [];
  const response = getMultiplicationGrid(array);
  expect(response).toEqual([]);
});

test('array with a number', () => {
  const array = [1];
  const response = getMultiplicationGrid(array);
  expect(response).toEqual([
    {
      yLabel: 1,
      children: [
        {
          xLabel: 1,
          xyValue: 1,
        },
      ],
    },
  ]);
});

test('array with 3 numbers', () => {
  const array = [2, 3, 5];
  const response = getMultiplicationGrid(array);
  expect(response).toEqual([
    {
      yLabel: 2,
      children: [
        {
          xLabel: 2,
          xyValue: 4,
        },
        {
          xLabel: 3,
          xyValue: 6,
        },
        {
          xLabel: 5,
          xyValue: 10,
        },
      ],
    },
    {
      yLabel: 3,
      children: [
        {
          xLabel: 2,
          xyValue: 6,
        },
        {
          xLabel: 3,
          xyValue: 9,
        },
        {
          xLabel: 5,
          xyValue: 15,
        },
      ],
    },
    {
      yLabel: 5,
      children: [
        {
          xLabel: 2,
          xyValue: 10,
        },
        {
          xLabel: 3,
          xyValue: 15,
        },
        {
          xLabel: 5,
          xyValue: 25,
        },
      ],
    },
  ]);
});
