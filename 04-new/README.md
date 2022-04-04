# new

new 运算符创建一个用户自定义的对象类型的实例或具有构造函数的内置对象类型之一

```js
function Otaku(name, age) {
  this.name = name
  this.age = age

  this.habit = 'Games'
}

Otaku.prototype.strength = 60
Otaku.prototype.sayYourName = function () {
  console.log(`I am ${this.name}`)
}
const person = new Otaku('Kevin', '23')

console.log(person.name) // Kevin
console.log(person.habit) // Games
console.log(person.strength) // 60

person.sayYourName() // I am Kevin
```

从这个例子中，我们可以看到，实例 person 可以：

1. 访问到 Otaku 构造函数里的属性
2. 访问到 Otaku.prototype 中的属性

## 初步实现

```js
function Otaku() {}

// 使用 new
const person = new Otaku()
// 使用 objectFactory
const person = objectFactory(Otaku)
```

分析：

> 因为 new 的结果是一个新对象，所以在模拟实现的时候，我们也要建立一个新对象，假设这个对象叫 obj，因为 obj 会具有 Otaku 构造函数里的属性，我们可以使用 Otaku.apply(obj, arguments) 来给 obj 添加新的属性

```js
function objectFactory() {
  const obj = new Object()
  Constructor = [].shift.call(arguments)
  obj.__proto__ Constructor.prototype
  Constructor.apply(obj, arguments)
  return obj
}
```

在这一版中，我们：

1. 用 new object() 的方法新建了一个对象 Obj
2. 取出第一个参数，就是我们要传入的构造函数。此外因为会修改原数组，所以 arguments 会被去除第一个参数
3. 将 obj 的原型指向构造函数，这样 obj 就可以访问到构造函数原型中的属性
4. 使用 apply ，改变构造函数 this 的指向到新建的对象，这样 obj 就可以访问到构造函数中的属性
5. 返回 obj

## 第二版 增加返回值

```js
function objectFactory() {
  const obj = new Object()
  Constructor = [].shift().call(arguments)
  obj.__proto__ = Constructor.prototype
  const res = Constructor.apply(obj, arguments)
  return typeof res === 'object' ? res : obj
}
```
