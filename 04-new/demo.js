/*
  new 运算符创建一个用户自定义的对象类型的实例或具有构造函数的内置对象的实例
*/

// function Car(make, model) {
//   this.make = make
//   this.model = model
// }

// const car1 = new Car('比亚迪', 'china')

// console.log(car1.make)

/*
  new 关键这会进行如下的操作：
  1. 创建一个空的简单 JavaScript 对象（即{}）
  2. 为步骤1新创建的对象添加 __proto__，将该属性链接至构造函数的原型对象
  3. 将步骤1新创建的对象作为 this 的上下文
  4. 如果该函数没有返回对象，则返回 this
*/

/*
创建一个用户自定义的对象需要两步：
1. 通过编写函数来定义对象类型
2. 通过 new 来创建对象实例

创建一个对象类型，需要创建一个指定其名称和属性的函数；对象的属性可以指向其他对象，
当代码 new Foo() 执行时，会发生以下的事情：
1. 一个继承自 Foo.prototype 的新对象被创建
2. 使用指定的参数调用构造函数 Foo，并将 this 绑定到新创建的对象。new Foo 等同于 new Foo()，也就是没有指定参数列表，Foo不带任何参数调用的情况。
3. 由构造函数返回的对象就是 new 表达式的结果，如果构造函数没有显式返回一个对象，则使用步骤1创建的对象
*/

// function Car() {}
// const car1 = new Car()
// const car2 = new Car()

// console.log(car1.color) // undefined

// Car.prototype.color = 'original color'

// console.log(car1.color) // original color

// car1.color = 'black'
// console.log(car1.color) // black

// console.log(car1.__proto__.color)
// console.log(car2.__proto__.color)

// console.log(car1.color)
// console.log(car2.color)
