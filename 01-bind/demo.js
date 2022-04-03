// ! bind 基本使用
// const moduleObj = {
//   x: 37,
//   getX: function () {
//     return this.x
//   }
// }

// const unboundGetX = moduleObj.getX

// console.log(unboundGetX()) // undefined
// const boundGetX = unboundGetX.bind(moduleObj)
// console.log(boundGetX()) // 37

// ! 创建绑定函数
// this.x = 3
// const moduleObj = {
//   x: 37,
//   getX: function () {
//     console.log(this.x)
//     return this.x
//   }
// }
// moduleObj.getX() // 37

// const retrieveX = moduleObj.getX
// retrieveX() // 3 因为函数是在全局作用域中调用的 （在 nodejs 中指向 输出 undefined）
// const boundGetX = retrieveX.bind(moduleObj)
// boundGetX() // 37

// ! 偏函数
// bind()的另一个最简单的用法是使用一个函数拥有预设的初始参数。只要将这些参数（如果有的话）作为 bind() 的参数写在 this 后面。
// 当绑定函数被调用时，这些参数会被插入到目标函数的参数列表的开始未知，传递给绑定函数的参数会跟在它们后面
// function list() {
//   return Array.prototype.slice.call(arguments)
// }
// function addArguments(arg1, arg2) {
//   return arg1 + arg2
// }
// const list1 = list(1, 2, 3) // [1, 2, 3]
// const result1 = addArguments(1, 2) // 3

// // 创建一个函数，它拥有预设参数列表
// const leadingThirtySevenList = list.bind(null, 37)
// // 创建一个函数，它拥有预设的第一个参数
// const addThirtySeven = addArguments.bind(null, 37)

// const list2 = leadingThirtySevenList() // 37
// const list3 = leadingThirtySevenList(1, 2, 3) // [37, 1, 2, 3]

// const result2 = addThirtySeven(5) // 37 + 5 = 42
// const result3 = addThirtySeven(5, 10) // 37 + 5 = 42 第二个参数被忽略

// console.log(result1, result2, result3)
// ! 配合 setTimeout
// 在默认情况下，使用 window.setTimeout() 时，this 关键字会指向 window （global）对象。当类的方法中需要 this 指向类的实例时，
// 你可能需要显式地把 this 绑定到回调函数，就不会丢失该实例的引用
// function LateBloomer() {
//   this.petalCount = Math.ceil(Math.random() * 12) + 1
// }

// LateBloomer.prototype.bloom = function () {
//   setTimeout(this.declare.bind(this), 1000)
// }

// LateBloomer.prototype.declare = function () {
//   console.log(`I am a beautiful flower with ${this.petalCount} petals`)
// }

// const flower = new LateBloomer()
// flower.bloom()

// ! 作为构造函数使用的绑定函数
// 绑定函数自动适应于使用 new 操作符去构造一个由目标函数创建的新实例。当一个绑定函数是用来构建一个值的。原来提供的 this 就会被忽略。不过提供的
// 参数列表仍然会插入到构造函数调用时的参数列表之前。
// ! 快捷调用
// 在你想要为一个需要特定 this 值的函数创建一个捷径的时候，bind() 也很好用。
// 你可以用 Array.prototype.slice 来将一个类似于数组的对象转换成一个真正的数组。
// const slice = Array.prototype.slice
// slice.apply(arguments)
// 用 bind 可以使这个过程变得简单

const unboundSlice = Array.prototype.slice
const slice = Function.prototype.apply.bind(unboundSlice)
slice.apply(arguments)
