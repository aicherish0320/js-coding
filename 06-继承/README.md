# JavaScript 继承

## 1. 原型链继承

```js
function Parent() {
  this.name = 'Kevin'
}
Parent.prototype.getName = function () {
  console.log(this.name)
}
function Child() {}
Child.prototype = new Parent()
const child1 = new Child()
console.log(child1.getName()) // Kevin
```

**问题**

1. 引用类型的属性被所有实例共享

```js
function parent() {
  this.names = ['jack', 'tom']
}
function Child() {}
Child.prototype = new Parent()
const child1 = new Child()
child1.names.push('mary')
console.log(child1.names) // ['jack', 'tom', 'mary']
const child2 = new Child()
console.log(child2.names) // ['jack', 'tom', 'mary']
```

2. 在创建 Child 的实例时，不能向 parent 传参

## 2. 借用构造函数（经典继承）

```js
function Parent() {
  this.names = ['peter', 'jack']
}
function Child() {
  Parent.call(this)
}
const child1 = new Child()
child1.names.push('mike')
console.log(child1.names) // ['peter', 'jack', 'mike']
const child2 = new Child()
console.log(child2.names) // ['peter', 'jack']
```

**优点**

1. 避免了引用类型的属性被所有实例共享
2. 可以在 Child 中向 Parent 传参

**缺点**
方法都在构造函数中定义，每次创建实例都会创建一遍方法。

## 3. 组合继承

原型链继承和经典继承的双剑合璧

```js
function Parent(name) {
  this.name = name
  this.colors = ['red', 'blue', 'green']
}

Parent.prototype.getName = function () {
  console.log(this.name)
}

function Child(name, age) {
  Parent.call(this, name)

  this.age = age
}

Child.prototype = new Parent()
Child.prototype.constructor = Child

const child1 = new Child('Kevin', '18')
child1.colors.push('black')

console.log(child1.name) // Kevin
console.log(child1.age) // 18
console.log(child1.colors) // ['red', 'blue', 'green', 'black']

const child2 = new Child('jack', '23')

console.log(child1.name) // jack
console.log(child1.age) // 23
console.log(child1.colors) // ['red', 'blue', 'green']
```

优点：融合原型链继承和构造函数的优点，是 JavaScript 中最常用的继承模式

## 4. 原型式继承

```js
// ES5 Object.create 的模拟实现，将传入的对象作为创建的对象的原型
function createObj(o) {
  function F() {}
  F.prototype = o
  return new F()
}
```

**缺点**：
包含引用类型的属性始终都会共享相应的值，这点跟原型链继承一样。

```js
const person = {
  name: 'jack',
  friends: ['tom', 'mary']
}

const p1 = createObj(person)
const p2 = createObj(person)

p1.name = 'person1'
console.log(person2.name) // jack

p1.friends.push('mike')
console.log(p2.friends) // ['tom', 'mary', 'mike']
```

**注意：** 修改 p1.name 的值，p2.name 的值并未发生改变，并不是因为 p1 和 p2 有独立的值，而是因为 p1.name = 'person1'，给 p1 添加了 name 的值，并非修改了原型上的值

## 5. 寄生式继承

创建一个仅用于封装继承过程的函数，该函数在内部以某种形式来做增强，最后返回结果

```js
function createObj(o) {
  const clone = Object.create(o)
  clone.sayName = function () {
    console.log('hi')
  }
  return clone
}
```

**缺点**：跟借用构造函数模式一样，每次创建对象都会创建一遍方法

## 6. 寄生组合式继承

为了方便大家阅读，在这里重复一下组合继承的代码：

```js
function Parent(name) {
  this.name = name
  this.arr = [1, 2]
}

Parent.prototype.getName = function () {
  console.log(this.name)
}

function Child(name, age) {
  Parent.call(this, name)
  this.age = age
}

// Child.prototype = new Parent()
// 关键
const F = function () {}
F.prototype = Parent.prototype
Child.prototype = new F()

const child1 = new Child('jack', 23)

console.log(child1)
```

组合继承最大的缺点是会调用两次父构造函数。
一次是设置子类型实例的原型的时候

```js
Child.prototype = new Parent()
```

一次是在创建子类型实例的时候

```js
const child1 = new Child('jack', 23)
```

## 继承组合式继承

> 这种方式的高效率体现它只调用了一次 Parent 构造函数，并且因此避免了在 Parent.prototype 上面创建不必要的、多余的属性。与此同时，原型链还能保持不变；因此，还能够正常使用 instanceof 和 isPrototypeOf。开发人员普遍认为寄生组合式继承是引用类型最理想的继承范式
