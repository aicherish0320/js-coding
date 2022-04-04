# 原型和原型链

## 构造函数创建对象

```js
function Person() {
  const person = new Person()
  person.name = 'Kevin'
  console.log(person.name) // Kevin
}
```

## prototype

每个函数都有一个 prototype 属性，就是我们经常在各种例子中看到的那个 prototype，比如：

```js
function Person() {}
// prototype 是函数才会有的属性
Person.prototype.name = 'Kevin'
const person1 = new Person()
const person2 = new Person()
console.log(person1.name)
console.log(person2.name)
```

那这个函数的 prototype 属性到底指向的是什么呢？是这个函数的原型吗？
其实，函数的 prototype 属性指向了一个对象，这个对象正是调用该构造函数而创建的实例的原型，也就是这个例子中的 person1 和 person2 的原型
那什么是原型呢？你可以这样理解：每一个 JavaScript 对象（null 除外）在创建的时候就会与之关联另一个对象，这个对象就是我们所说的原型，每一个对象都会从原型继承属性
那么我们该怎么表示实例与实例原型，也就是 person 和 Person.prototype 之间的关系呢，这时候我们就要讲到第二个属性：\***\*proto\*\***
这是每一个 JavaScript 对象（null 除外）都具有的一个属性，叫 **proto**，这个属性会指向该对象的原型。
既然实例对象和构造函数都可以指向原型，那么原型是否有属性指向构造函数或者实例呢？

## Constructor

指向实例倒是没有，因为一个构造函数可以生成多个实例，但是原型指向构造函数倒是有的，这就要讲到第三个属性：constructor ，每个原型都有一个 constructor 属性指向关联的构造函数。

## 实例与原型

当读取实例的属性时，如果找不到，就会查找与对象关联的原型中的属性，如果还查不到，就去找原型的原型，一直找到最顶层为止。

**真的是继承吗？**
最后是关于继承，前面我们讲到“每一个对象都会从原型继承属性”，实际上，继承是一个十分具有迷惑性的说法，引用《你不知道的 JavaScript》中的话，就是：继承意味着复制操作，然后 JavaScript 默认并不会复制对象属性，相反，JavaScript 只是在两个对象之间创建一个关联，这样，一个对象就可以通过委托访问另一个对象的属性和函数，所以与其叫继承，委托的说法反而更准确些
