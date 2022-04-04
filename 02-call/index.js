Function.prototype.myCall = function (context) {
  context.fn = this

  const args = []
  for (let i = 1; i < arguments.length; i++) {
    args.push(`arguments[${i}]`)
  }
  eval(`context.fn(${args})`)

  delete context.fn
}

const foo = {
  value: 1
}

function bar(name, age) {
  console.log(this.value, name, age)
}

bar.myCall(foo, 'aic', 23)
