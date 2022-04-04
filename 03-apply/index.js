Function.prototype.myApply = function (context, arr) {
  const context = Object(context) || window
  context.fn = this

  let result
  if (!arr) {
    result = context.fn()
  } else {
    const args = []
    for (let i = 0, len = arr.length; i < len; i++) {
      arr.push('arr[' + i + ']')
    }
    result = eval('context(fn' + args + ')')
  }

  delete context.fn
  return result
}
