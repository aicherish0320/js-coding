function objectFactory() {
  const obj = new Object()
  Constructor = [].shift.call(arguments)
  obj.__proto__ = Constructor.prototype
  const res = Constructor.apply(obj, arguments)
  return typeof res === 'object' ? res : obj
}

function Person(name, age) {
  // this.name = name
  this.age = age

  this.habit = 'play'

  return {
    name
  }
}

Person.prototype.height = 170

Person.prototype.say = function () {
  console.log('hello')
}

Person.prototype.showMe = function () {
  console.log('My name is ', this.name)
}

// const person = new Person('aic', 23)
const person = objectFactory(Person, 'aic', 23)

console.log(person.name)
console.log(person.habit)
console.log(person.height)

// person.showMe()
