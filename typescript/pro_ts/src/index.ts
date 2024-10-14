type RestArgs<M> = M extends "string" ? [string, string] : [number, number, number]

function func<M extends "string" | "number">(
  mode: M,
  ...args: RestArgs<M>
) {
  console.log(mode, ...args)
}

func("string", "uhyo", "hyo")
func("number", 1, 2, 3)
func("string", 1, 2,)
func("number", "uhyo", "hyo")