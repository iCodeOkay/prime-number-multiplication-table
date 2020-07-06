import getPrimeNumbers from './getPrimeNumbers';

test('where n is -1', () => {
  const nPrimeNumbers = getPrimeNumbers(-1);
  expect(nPrimeNumbers.length).toEqual(0);
  expect(nPrimeNumbers).toEqual([]);
});

test('where n is 0', () => {
  const nPrimeNumbers = getPrimeNumbers(0);
  expect(nPrimeNumbers.length).toEqual(0);
  expect(nPrimeNumbers).toEqual([]);
});

test('where n is 1', () => {
  const nPrimeNumbers = getPrimeNumbers(1);
  expect(nPrimeNumbers.length).toEqual(1);
  expect(nPrimeNumbers).toEqual([2]);
});

test('where n is 3', () => {
  const nPrimeNumbers = getPrimeNumbers(3);
  expect(nPrimeNumbers.length).toEqual(3);
  expect(nPrimeNumbers).toEqual([2, 3, 5]);
});
