/*
  apply() 方法调用一个具有给定 this 值的函数，以及一个数组的形式提供的参数
*/

// const numbers = [5, 6, 2, 3, 7]
// const max = Math.max.apply(null, numbers)
// console.log(max)
// const min = Math.min.apply(null, numbers)
// console.log(min)

/*
  在调用一个存在的函数时，你可以为其制定一个 this 对象。this 指当前对象，也就是正在调用这个函数的对象。使用 apply ，你可以只写一次这个方法然后在另一个对象中继承它，而不用在新对象中重复写该方法
*/

// ! 用 apply 将数组各项添加到另一个数组
// 我们可以使用 push 将元素追加到数组中。由于 push 接受可变数量的参数，所以也可以一次追加多个元素。

// const array = ['a', 'b']
// const elements = [0, 1, 2]
// array.push.apply(array, elements)
// console.log(array)

// ! 使用 apply 和内置函数
// 对于一些需要写循环以遍历数组各项的需求，我么可以用 apply 完成以避免循环

// const numbers = [5, 6, 2, 3, 7]
// const max = Math.max.apply(null, numbers)
// const min = Math.mix.apply(null, numbers)

// ! 使用 apply 来链接构造器
// 你可以使用 apply 来链接一个对象，类似于 Java。在接下来的例子中我们会创建一个全局 Function 对象的 constructor 方法。来使你能够在构造器中使用一个类数组对象而非参数列表

// Function.prototype.constructor = function (aArgs) {
//   const oNew = Object.create(this.prototype)
//   this.apply(oNew, aArgs)
//   return oNew
// }

function fn(a, b, c) {
  console.log(a, b, c)
}

const elements = [1, 2, 3]
fn(elements)
fn.apply(null, elements)
