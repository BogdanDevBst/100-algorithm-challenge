const addTwoDigits = (n: any): number => {
  const nums = n.toString().split("");
  console.log(nums);

  return parseInt(nums[0]) + parseInt(nums[1]) + parseInt(nums[2]);
};

console.log(addTwoDigits(223));
