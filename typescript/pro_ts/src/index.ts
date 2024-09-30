function map(array: number[], callback: (i: number) => number): number[] {
  const result: number [] = []
  for (const element of array) {
    result.push(callback(element))
  }
  return result;
}

const data = [1, 1, 2, 3, 5, 8, 13]

const result = map(data, (x) => x * 10);
console.log(result);