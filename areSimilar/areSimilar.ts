const areSimilar = (firstArr: number[], secondArr: number[]): boolean => {
  const thirdArr: number[] = [];
  let fourthArr: number[] = [];

  if (firstArr.toString() === secondArr.toString()) {
    return true;
  }

  for (let i = 0; i < firstArr.length; i++) {
    if (firstArr[i] !== secondArr[i]) {
      thirdArr.push(firstArr[i]);
      fourthArr.push(secondArr[i]);
    }
  }

  fourthArr = fourthArr.reverse();

  if (thirdArr.length === 2 && thirdArr.toString() === fourthArr.toString()) {
    return true;
  }
  return false;
};

console.log(areSimilar([1, 2, 3], [1, 2, 3]));
console.log(areSimilar([1, 2, 3], [2, 1, 3]));
console.log(areSimilar([1, 2, 2, 1], [2, 1, 1, 2]));
console.log(areSimilar([1, 2, 2], [2, 1, 1]));
console.log(areSimilar([1, 2, 3, -4], [2, 1, 3, -4]));
