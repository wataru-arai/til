// クラス式なのでUserというクラスの型は生成されない
class User {
  name: string = "";
  age: number = 0;
}

const uhyo = new User();
console.log(uhyo instanceof User);
console.log({} instanceof User);
const john: User = {
  name: "John Smith",
  age: 15
}

// User型ではあるがUserのインスタンスではないのでfalseになる
// ランタイムでオブジェクトがどう生成されたかを見ている(= 型は見ていない)
console.log(john instanceof User)