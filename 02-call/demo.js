// call 方法使用一个指定的 this 值和单独给出的一个或多个参数来调用一个函数。
// 该方法的语法和作用与 apply() 方法类似，只有一个区别，就是 call() 方法接受的是一个参数列表，而 apply() 方法接受的是一个包含多个参数的数组。

// function Product(name, price) {
//   this.name = name
//   this.price = price
// }
// function Food(name, price) {
//   Product.call(this, name, price)
//   this.category = 'food'
// }
// console.log(new Food('cheese', 5).name) // cheese

/*
  call() 允许为不同的对象分配和调用属于一个对象的函数/方法
  call() 提供新的 this 值给当前调用的函数/方法。你可以使用 call 来实现继承：写一个方法，然后让另外一个新的对象来继承它（而不是在新对象中再写一次这个方法）。
*/

//! 使用 call 方法调用父构造函数
// 在一个字构造函数中，你可以通过调用父构造函数的 call 方法来实现继承，类似于 Java 中的写法

// function Product(name, price) {
//   this.name = name
//   this.price = price
// }

// function Food(name, price) {
//   Product.call(this, name, price)
//   this.category = 'food'
// }

// function Toy(name, price) {
//   Product.call(this, name, price)
//   this.category = 'toy'
// }

// const cheese = new Food('feta', 5)
// console.log(cheese)
// const fun = new Toy('robot', 40)
// console.log(fun)

// ! 使用 call 方法调用匿名函数
// const animals = [
//   {
//     species: 'Lion',
//     name: 'King'
//   },
//   {
//     species: 'Whale',
//     name: 'Fail'
//   }
// ]
// for (let i = 0; i < animals.length; i++) {
//   ;(function (i) {
//     this.print = function () {
//       console.log('#' + i + ' ' + this.species + ': ' + this.name)
//     }
//     this.print()
//   }.call(animals[i], i))
// }

// ! 使用 call 方法调用函数并且指定上下文的 'this'
// function greet() {
//   const reply = [
//     this.animal,
//     'typically sleep between',
//     this.sleepDuration
//   ].join('')
//   console.log(reply)
// }
// const obj = {
//   animal: 'cats',
//   sleepDuration: '12 and 16 hours'
// }

// greet.call(obj)

// ! 使用 call 方法调用函数并且不指定第一个参数 （arguments）
// 在严格模式下， this 的值将会是 undefined
