
const arr = (new Array(100)).fill(0).map((item, index) => {
  return index
})

const sum = arr.slice(0, 10).reduce((prev, curr) => { return prev + curr })

console.log(sum) // 45
