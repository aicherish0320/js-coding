# call

call() 方法在使用一个指定 this 值和若干个指定的参数值的前提下调用某个函数或方法

```js
const foo = {
  value: 1
}
function bar() {
  console.log(this.value)
}
bar.call(foo) // 1
```

注意两点：

1. call 改变了 this 的指向，指向到 foo
2. bar 函数执行了

## 模拟实现第一步

试想当调用 call 的时候，把 foo 对象改造成如下：

```js
const foo = {
  value: 1,
  bar: function () {
    console.log(this.value)
  }
}
foo.bar() // 1
```

这个时候 this 就指向了 foo，但是这样却给 foo 对象本身添加了一个属性，但我们可以用 delete 删除它

步骤：

1. 将函数设为对象的属性
2. 执行该函数
3. 删除该函数

```js
foo.fn = bar
foo.fn()
delete foo.fn
```

实现

```js
Function.prototype.myCall = function (context) {
  context.fn = this
  context.fn()
  delete context.fn
}
```

## 模拟实现第二步

call 函数还能给定参数执行函数

```js
Function.prototype.myCall = function (context) {
  context.fn = this
  const args = []
  for (let i = 1; i < arguments.length; i++) {
    args.push(`arguments[${i}]`)
  }
  // 这里 args 会自动调用 Array.toString() 这个方法
  eval('context.fn(' + args + ')')
  delete context.fn
}
```
