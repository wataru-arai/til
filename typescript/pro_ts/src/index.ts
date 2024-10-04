class User {
  name: string;
  #age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.#age = age;
  }

  public isChild():boolean {
    return this.#age <  20;
  }

  public filterOlder(users: readonly User[]): User[] {
    // コールバック関数内のthisは外側の関数filterOlderのthis（Userインスタンス）になる
    // return users.filter(u => u.#age > this.#age)

    // 以下の場合はthisが決定できないのでコンパイルエラーになる
    // return users.filter(function(u) { return u.#age > this.#age })

    // 以下のように型注釈するとコンパイルエラーが出なくなるが、今度はランタイムエラーになる
    // thisがUserのインスタンスになるようにうまいことやってくれるわけではない
    // return users.filter(function(this: User, u) { return u.#age > this.#age })

    // 最終的に以下のようにするとコンパイル・ランタイムエラーを解消することができるが、アロー関数があるので過去のテクニックとなっている
    // 特に意図がない時はアロー関数で関数を作るのが良い
    const _this = this; // 一時的にthisを変数に退避させておく
    return users.filter(function(u) { return u.#age > _this.#age })

  }
}

const uhyo = new User("uhyo", 26);
const john = new User("John Smith", 15);
const bob = new User("Bob", 40);

const older = uhyo.filterOlder([john, bob])
console.log(older)
