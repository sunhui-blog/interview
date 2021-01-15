const PENDING = 'PENDING'
const FULFILLED = 'FULFILLED'
const REJECTED = 'REJECTED'

class Promise {
  constructor (executor) {
    this.status = PENDING
    this.value = null
    this.reason = null
    this.onRejectedCallbacks = []
    this.onResolvedCallbacks = []

    let resolve = (value) => {
      this.status = FULFILLED
      this.value = value

      this.onResolvedCallbacks.forEach((fn) => fn())
    }

    let reject = (value) => {
      this.status = REJECTED
      this.value = value

      this.onRejectedCallbacks.forEach((fn) => fn())
    }

    try {
      executor(resolve, reject)
    } catch (error) {
      reject(error)
    }
  }

  then (onFulfilled, onRejected) {
    if (this.status === FULFILLED) {
      onFulfilled(this.value)
    }

    if (this.status === REJECTED) {
      onRejected(this.reason)
    }

    if (this.status === PENDING) {
      this.onResolvedCallbacks.push(() => {
        onFulfilled(this.value)
      })

      this.onRejectedCallbacks.push(() => {
        onRejected(this.reason)
      })
    }
  }
}

new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('success')
  }, 100)
}).then((data) => {
  console.log(data)
}, (error) => {
  console.log(error)
})
