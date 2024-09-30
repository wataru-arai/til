function map<T, V>(array: T[], callback: (i: T) => V): V[] {
  const result: V[] = []
  for (const element of array) {
    result.push(callback(element))
  }
  return result;
}

const data = [1, -3, -2, 8, 0, -1]

const result:boolean[] = map(data, (x) => x >= 0);
console.log(result);