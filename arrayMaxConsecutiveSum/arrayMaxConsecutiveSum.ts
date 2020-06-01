const arrayMaxConsecutiveSum = (inputArray: number[], k: number): number => {
  let sum: number = 0;
  let max: number = 0;

  for (let i = 0; i < k; i++) {
    sum += inputArray[i];
  }

  max = sum;

  for (let i = k; i < inputArray.length; i++) {
    sum -= inputArray[i - k];
    sum += inputArray[i];
    if (sum > max) {
      max = sum;
    }
  }

  return max;
};

console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6, 2, 4, 5, 6, 4], 3));
