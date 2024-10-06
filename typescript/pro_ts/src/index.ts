// type User {
//   name: string;
//   age: number;
// }

// function createUser(name: string, age: number): User {
//   if (name === "") {
//     throw new Error("名前は空にできません!")
//   }
//   return {
//     name,
//     age
//   };
// }

// function getMessage(user: User, message: string): string {
//   return `${user.name} (${user.age}) 「${message}」`
// }

// const uhyo = createUser("uhyo", 26);
// console.log(getMessage(uhyo, "こんにちは"));



// class User {
//   readonly name: string;
//   readonly age: number;

//   constructor(name: string, age: number) {
//     if (name === "") {
//       throw new Error("名前は空にできません!")
//     }
//     this.name = name;
//     this.age = age;
//   }

//   getMessage(message: string): string {
//     return `${this.name} (${this.age}) 「${message}」`
//   }
// }

// 以下が動作するようにクラスを使って上記のコードを置き換える
// const uhyo = new User("uhyo", 26);
// console.log(uhyo.getMessage("こんにちは"))

// 以下が動作するようにクラスを関数に置き換える
const getMessage = createUser("uhyo", 26)
console.log(getMessage("こんにちは！"))

type func = (val: string) => string

function createUser(name: string, age: number):func {
  const getMessage = function(val: string): string {
    return `${name} (${age}) 「${val}」`
  }
  return getMessage
}