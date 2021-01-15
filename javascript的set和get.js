class MyClass {
  constructor () {
    this.data = {}
  }

  set prop (value) {
    this.data = value
  }

  get prop () {
    return this.data
  }
}

const test = new MyClass()
test.prop = 123
test.prop // output:'123'

let book = {
  _year: 2020,
  edition: 1
}

Object.defineProperty(book, 'year', {
  get: function () {
    return this._year
  },
  set: function (newValue) {
    this._year = newValue
    this.edition++
  }
})


let book = {
  _year: 2020,
  edition: 1
}

Object.defineProperty(book, 'year', {
  get: function () {
    return this._year
  },
  set: function (newValue) {
    this._year = newValue
    this.edition++
  }
})
