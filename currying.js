function add (x, y) {
  return (x + y)
}

console.log(add(1, 2))

function curriedAdd (x) {
  return function (y) {
    return x + y
  }
}

console.log(curriedAdd(1)(3))
console.log(curriedAdd(1)(3) === 4)

function add (x, y) {
  return (x + y)
}

function currying (fn, ...args1) {
  return function (...args2) {
    return fn(...args1, ...args2)
  }
}

currying(add, 1)
currying(add, 1)(2)
