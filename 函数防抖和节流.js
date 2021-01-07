
/**
 * 函数防抖
*/
var timer;
function debounce (fn, delay, ...args) {
  clearTimeout(timer)
  timer = setTimeout(() => {
    console.log(args)
    fn(args)
  }, delay)
}

document.onclick = function () {
  debounce(testDebounce, 5000, 1111, 2222)
}

function testDebounce (...args) {
  console.log(args)
}

/**
 * 函数节流
*/
function throttle (fn, delay) {
  var previous = 0
  // 使用闭包返回一个函数并且用到闭包函数外面的变量previous
  return function () {
    var _this = this
    var args = arguments
    var now = new Date()
    if (now - previous > delay) {
      fn.apply(_this, args)

      previous = now
    }
  }
}

var testThrottleFn = throttle(testThrottle, 5000) // 节流函数

document.onclick = function (e) {
  testThrottleFn(e, 'throttle') // 给节流函数传参
}

function testThrottle (e, content) {
  console.log(e, content)
}

function A (a, b) {
  console.log(arguments)
}

A(1, 2)
