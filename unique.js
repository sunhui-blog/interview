const arr = [1, 1, 2, 3, 4, 4, 5, 6, 6]

function unique (arr) {
  return [...new Set(arr)]
}

// function unique (arr) {
//   return Array.from(new Set(arr))
// }

// function unique (arr) {
//   const newArr = []
//   for(let item of arr){
//     if (newArr.indexOf(item) === -1) {
//       newArr.push(item)
//     }
//   }

//   return newArr
// }

// function unique (arr) {
//   const newArr = [];
//   for(let item of arr){
//     if (!newArr.includes(item)) {
//       newArr.push(item)
//     }
//   }

//   return newArr
// }

// function unique (arr) {
//   const newArr = []
//   let isRepeat = false
//   for (let item of arr) {
//     isRepeat = false
//     for (let newItem of newArr) {
//       if (item === newItem) {
//         isRepeat = true
//       }
//     }

//     if (!isRepeat) {
//       newArr.push(item)
//     }
//   }

//   return newArr
// }

// function unique (arr) {
//   const newArr = []
//   const len = arr.length
//   for (let i = 0; i < len; i++) {
//     for (let j = i + 1; j < len; j++) {
//       if (arr[i] === arr[j]) {
//         j = ++i
//       }
//     }
//     newArr.push(arr[i])
//   }

//   return newArr
// }

unique(arr) // [1, 2, 3, 4, 5, 6]
