const getPrimeNumbers = (noOfRequestedPrimes) => {
  const primeNumbers = [];
  for (
    let currentNumber = 2;
    primeNumbers.length < noOfRequestedPrimes;
    currentNumber++
  ) {
    let divisorFound = false;
    for (let count = 2; count < currentNumber; count++) {
      if (currentNumber % count === 0) {
        divisorFound = true;
        break;
      }
    }

    if (!divisorFound) {
      primeNumbers.push(currentNumber);
    }
  }

  return primeNumbers;
};

export default getPrimeNumbers;
