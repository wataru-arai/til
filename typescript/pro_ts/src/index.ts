function getHelloStr(): `Hello, ${string}!` {
  const rand = Math.random();
  if (rand < 0.3) {
    return "Hello, world!"
  } else if (rand < 0.6) {
    return "Hello, my world!"
  } else if(rand < 0.9) {
    return "Hello, my world."
  } else {
    return "Hell, my world!"
  }
}

function makeKey<T extends string>(userName: T){
  // テンプレートリテラルなので型をレスポンスしていることにもなる
  return `user:${userName}`;
}

// T型に"uhyo"というリテラル型が入るので、戻り値の型も"uhyo"" extends stringになる
// これだと"user:uhyo"に合致しないのでコンパイルエラーが生じる　これをうまいことやっているのがas const
const uhyoKey: "user:uhyo" = makeKey("uhyo")

function formKey<T extends string>(key: `user:${T}`): T {
  return key.slice(5) as T;
}
const user = formKey("user:uhyo")