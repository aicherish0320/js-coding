# bind

`bind()`方法会创建一个新函数。当这个新函数被调用时，`bind()`的第一个参数将作为它运行时的 `this`，之后的一系列参数将会在传递的实参前传入作为它的参数。

## 特点

- 返回一个函数
- 可以传入参数

### 返回函数的模拟实现

- 使用

```js
const foo = { value: 1 }
function fn() {
  console.log(this.value)
}

const newFn = fn.bind(foo)
newFn() // 1
```

- 实现

```js
Function.prototype.myBind = function (context) {
  const fn = this
  return function () {
    // 有可能存在返回值
    return fn.apply(context)
  }
}
const foo = {
  value: 1
}
function fn() {
  return this.value
}
const newFn = fn.myBind(foo)
console.log(newFn()) // 1
```

### 传参的模拟实现

- 使用

```js
const foo = {
  value: 1
}
function fn(name, age) {
  console.log(this.value)
  console.log(name)
  console.log(age)
}
const newFn = fn.bind(foo, 'aicherish')
newFn(25)
// 1
// aicherish
// 25
```

- 实现

```js
Function.prototype.myBind = function (context) {
  const fn = this
  const args1 = Array.prototype.slice.call(arguments, 1)
  return function () {
    const args2 = Array.prototype.slice.call(arguments)
    return fn.apply(context, args1.concat(args2))
  }
}
```

### 构造函数效果的模拟实现

bind 还有一个特点，就是，一个绑定函数也能使用 new 操作符创建对象：这种行为就像把原函数当作成构造函数。提供的 this 值被忽略，同时调用时的参数被提供给模拟函数。也就是说当 bind 返回的函数作为构造函数的时候，bind 时指定的 this 值会失效，但传入的参数依然生效

- 使用

```js
const value = 2
const foo = {
  value: 1
}
function fn(name, age) {
  this.habit = 'play'
  console.log(this.value)
  console.log(name)
  console.log(age)
}
fn.prototype.friend = 'jack'
const newFn = fn.bind(foo, 'aicherish')
const obj = new newFn(25)
// undefined
// aicherish
// 25
console.log(obj.habit) // play
console.log(obj.friend) // jack
```

- 实现

```js
Function.prototype.myBind = function (context) {
  const fn = this
  const args1 = Array.prototype.slice.call(arguments, 1)
  const fBound = function () {
    const args2 = Array.prototype.slice(arguments)
    return fn.apply(
      // 当作为构造函数时，this 指向实例，此时结果为 true，将绑定函数的 this 指向该实例，可以让实例获得来自绑定函数的值
      // 当作为普通函数时， this 指向 window，此时结果为 false，将绑定函数的 this 指向 context
      this instanceof fBound ? this : context,
      args1.concat(args2)
    )
  }
  // 修改返回函数的 prototype 为绑定函数的 prototype，实例就可以继续绑定函数的原型中的值
  fBound.prototype = this.prototype
  return fBound
}
```

- 优化
  在上个写法中，我们直接将 fBound.prototype = this.prototype，我们直接修改 fBound.prototype 的时候，也会直接修改绑定函数的 prototype。这个时候，我们可以通过一个空函数来进行中转：

```js
Function.prototype.myBind = function (context) {
  const fn = this
  const args1 = Array.prototype.slice.call(arguments, 1)

  const fNop = function () {}

  const fBound = function () {
    const args2 = Array.prototype.slice.call(arguments)
    return fn.apply(this instanceof fNop ? this : context, args1.concat(args2))
  }

  fNop.prototype = this.prototype
  fBound.prototype = new fNOP()
  return fBound
}
```

## 最终代码

```js
Function.prototype.bind = function (context) {
  if (typeof this !== 'function') {
    throw new Error(
      'Function.prototype.bind - what is trying be bound is not callable'
    )
  }
  const self = this
  const args = Array.prototype.slice.call(arguments, 1)
  const fNOP = function () {}

  const fBound = function () {
    const bindArgs = Array.prototype.slice.call(arguments)
    return self.apply(
      this instanceof FNOP ? this : context,
      args.concat(bindArgs)
    )
  }

  fNOP.prototype = this.prototype
  fBound.prototype = new fNOP()
  return fBound
}
```
