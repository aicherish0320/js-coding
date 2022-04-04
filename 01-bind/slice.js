/*
  slice() 方法返回一个新的数组对象，这一对象是由 begin 和 end 决定的原数组的浅拷贝（包括 begin，不包括 end）。原数组不会被改变。
*/
// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant']

// console.log(animals.slice(2)) // [ 'camel', 'duck', 'elephant' ]
// console.log(animals.slice(2, 4)) // [ 'camel', 'duck' ]
// console.log(animals.slice(1, 5)) // [ 'bison', 'camel', 'duck', 'elephant' ]
// console.log(animals.slice(-2)) // [ 'duck', 'elephant' ]
// console.log(animals.slice(2, -1)) // [ 'camel', 'duck' ]

/*
  slice 不会修改原数组，只会返回一个浅复制了原数组中的元素的一个新数组。原数组的元素会按照下述规则拷贝：
  1. 如果该元素是个对象引用（不是实际的对象），slice 会拷贝这个对象引用到新的数组里。两个对象引用都引用了用一个对象，如果被引用到对象发生变化
    则新的和原来的数组中的这个元素也会发生改变
  2. 对于字符串、数字及布尔值来说，slice 会拷贝这些值到新的数组里。在别的数组里修改这些字符串或数字或是布尔值，将不会影响另一个数组。
*/

// const myHonda = { color: 'red', wheels: 4, engine: { cylinders: 4, size: 2.2 } }
// const myCar = [myHonda, 2, 'cherry condition', 'purchased 1997']
// const newCar = myCar.slice(0, 2)
// console.log('myCar >>> ', JSON.stringify(myCar))
// console.log('newCar >>> ', JSON.stringify(newCar))
// console.log('myCar[0].color >>> ', JSON.stringify(myCar[0].color))
// console.log('newCar[0].color >>> ', JSON.stringify(newCar[0].color))

// myHonda.color = 'purple'
// console.log('The new color of my Honda is >>> ', myHonda.color)

// console.log('myCar[0].color >>> ', myCar[0].color)
// console.log('newCar[0].color >>> ', newCar[0].color)

/*
  类数组对象(Array-like)
  slice 方法可以用来将一个类数组对象/集合转换成一个新数组。你只需将该方法绑定到这个对象上。一个函数中的 arguments 就是一个类数组对象的例子
*/
// function list() {
//   return Array.prototype.slice.call(arguments)
// }
// const list1 = list(1, 2, 3)
// console.log(list1) // [1,2,3]

// 除了使用 Array.prototype.slice.call(arguments)，你也可以简单的使用 [].slice.call(arguments) 来替代。另外，你可以使用 bind 来简化该过程。
// const unboundSlice = Array.prototype.slice
// const slice = Function.prototype.call.bind(unboundSlice)

// function list() {
//   return slice(arguments)
// }
// const list1 = list(1, 2, 3, 4)
// console.log(list1)
