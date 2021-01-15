function remove (arr, val) {
  arr = arr.filter(item => {
    return item !== val
  })
}

const vals = [1, 2, 3, 1, 2]
remove(vals, 2)
console.log(vals) // [1,3,1]

// let vals = [1, 2, 3, 1, 2]
// vals

// 搜索引擎
