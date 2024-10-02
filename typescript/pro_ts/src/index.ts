// クラス式なのでUserというクラスの型は生成されない
const User = class {
  name: string = "";
  age: number = 0;

  public isAdult(): boolean {
    return this.age >= 20;
  }
}

const uhyo = new User();
const john: User = {
  name: "John Smith",
  age: 15,
  isAdult: () => true
}