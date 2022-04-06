// ! 1. 原型链继承
// function Parent() {
//   this.name = 'jack'
//   this.arr = [1, 2]
// }
// Parent.prototype.getName = function () {
//   console.log(this.name)
// }

// function Child() {}

// Child.prototype = new Parent()

// const child1 = new Child()
// child1.arr.push(3, 4)

// const child2 = new Child()

// console.log(child1.arr, child2.arr)

// ! 2. 借用构造函数
// function Parent(name) {
//   this.arr = [1, 2]
//   this.name = name
// }
// function Child(name) {
//   Parent.call(this, name)
// }

// const child1 = new Child('jack')
// child1.arr.push(3, 4)
// console.log(child1.name)
// console.log(child1.arr)

// const child2 = new Child('tom')

// console.log(child2.name)
// console.log(child2.arr)

// ! 3. 组合式继承（原型链和借用构造函数继承）
// function Parent(name) {
//   this.name = name
//   this.arr = [1, 2]
// }

// Parent.prototype.getName = function () {
//   console.log(this.name)
// }

// function Child(name, age) {
//   // 这里的 this 如果使用 new Child 就表示 实例对象
//   Parent.call(this, name)
//   this.age = age
// }

// Child.prototype = new Parent()
// Child.prototype.constructor = Child

// const child1 = new Child('jack', 23)
// child1.arr.push(3, 4)

// child1.getName()
// console.log(child1.name)
// console.log(child1.arr)
// console.log(child1.age)

// const child2 = new Child('tom', 25)
// console.log(child2.name)
// console.log(child2.arr)
// console.log(child2.age)

// ! 4. 原型式继承
// function createObj(o) {
//   function F() {}
//   F.prototype = o
//   return new F()
// }

// const person = {
//   name: 'jack',
//   arr: [1, 2]
// }

// const p1 = createObj(person)
// const p2 = createObj(person)

// p1.arr = 12
// console.log(p2.arr) // [1, 2]

// p1.name = 'p1'
// console.log(p2.name) // jack
// p1.arr.push(3, 4)
// console.log(p2.arr) // [1, 2, 3, 4]

// ! 寄生组合式继承
function object(o) {
  function F() {}
  F.prototype = o
  return new F()
}
function prototype(child, parent) {
  const prototype = object(parent.prototype)
  prototype.constructor = child
  child.prototype = prototype
}
// 使用
prototype(Child, Parent)
