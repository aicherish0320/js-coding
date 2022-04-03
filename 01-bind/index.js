Function.prototype.myBind = function (context) {
  if (typeof this !== 'function') {
    throw new Error('必须使用函数调用')
  }
  const fn = this
  const args = Array.prototype.slice.call(arguments, 1)

  const fNOP = function () {}

  const fBound = function () {
    const bindArgs = Array.prototype.slice.call(arguments)
    fn.apply(this instanceof fNOP ? this : context, args.concat(bindArgs))
  }

  fNOP.prototype = fn.prototype
  fBound.prototype = new fNOP()
  return fBound
}

global.bar = 'barrr'
const foo = {
  bar: 'bar'
}

function fn(name, age) {
  // console.log(this.bar)
  // console.log('name >>> ', name)
  // console.log('age >>> ', age)
}
fn.prototype.hello = 'hello'

const newFn = fn.myBind(foo, 'aicherish')
newFn.prototype.a = 123

const instance = new newFn(23)
console.log(instance.a)
// newFn(25)

const newFn2 = fn.myBind(foo, 'aicherish')
const instance2 = new newFn2(23)
console.log(instance2.a)
