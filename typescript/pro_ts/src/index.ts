function sum(nums: readonly number[]): number {
  let result = 0;
  for (const num of nums) {
    result += num;
  }
  return result;
};

const num1: readonly number[] = [1, 10, 100];
console.log(sum(num1))

const num2: number[] = [1, 1, 2, 3, 5];
console.log(sum(num2))