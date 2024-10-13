type Human = {
  type: "Human";
  name: string;
  age: number;
}

// function isHuman(value: any): value is Human {
//   if(value == null) return false;

//   return (
//     value.type === "Human" &&
//     typeof value.name === "string" &&
//     typeof value.age === "number"
//   )
// }

function assertHuman(value: any): asserts value is Human {
  if( value == null ) {
    throw new Error('Given value is null or undefined')
  }
  if (
    value.type !== "Human" ||
    typeof value.name !== "string" ||
    typeof value.age !== "number"
  ) {
    throw new Error('Given value is not a Human')
  }
}

function checkAndUserHuman(value: unknown) {
  assertHuman(value)
  const name = value.name
}