const repeatLength = 5;

type Func = <T>(element: T) => T[];

const repeat:Func = (element) => {
  const repeatLength = 3;
  const result = []
  for (let i = 0; i < repeatLength; i++) {
    result.push(element)
  }
  return result;
}

console.log(repeat("a"));
console.log(repeat<number>(123));

function sabayomi(age: number) {
  if(age >= 20) {
    const lie = age - 5;
    return lie
  }
  console.log(lie);
  return age;
}
