
// Array.prototype.myReduce = function (callback, initVal) {
//   const arr = this

//   for (let i = 0; i < arr.length; i++) {
//     initVal = callback(arr[i], initVal)
//   }

//   return initVal
// }

// const datas = [4, 8, 15, 16, 23, 42]

// const sum = datas.myReduce(function (prev, next) {
//   return prev + next
// }, 0)

// console.log(sum, '----')

// Array.prototype.myReduce = function (callback, initVal) {
//   const arr = this

//   arr.forEach((item) => {
//     initVal = callback(item, initVal)
//   })

//   return initVal
// }

// const datas = [4, 8, 15, 16, 23, 42]

// const sum = datas.myReduce(function (prev, next) {
//   return prev + next
// }, 0)

// console.log(sum) // 108

Array.prototype.myReduce = function (callback, initVal) {
  var arr = this

  arr.forEach((item) => {
    initVal = item + initVal
  })

  return initVal
}


const datas = [4, 8, 15, 16, 23, 42]

const sum = datas.myReduce(function (prev, next) {
  return prev + next
}, 0)

console.log(sum)
