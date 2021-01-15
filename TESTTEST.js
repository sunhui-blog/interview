// function getDepth (val) {
//   let depth = 0

//   depth = typeof val === 'number' ? 1 : val.length + 1

//   return depth
// }

function getDepth (val) {
  Array.isArray(val) ? val.map(item => { Array.isArray(item) }) : 0 
}


console.log('1:', getDepth(1)) // 1
console.log('[]:', getDepth([])) // 1
console.log('[1]:', getDepth([1])) // 2
console.log('[[1], 2, 3]:', getDepth([[1], 2, 3, 4])) // 3
