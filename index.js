'use strict'
const isNumber = require('is-number')

module.exports = function isEven(value) {
    const n = Math.abs(value)
    if (!isNumber(n))
        throw new TypeError('expected a number')

    if (!Number.isInteger(n))
        throw new Error('expected an integer')

    if (!Number.isSafeInteger(n))
        throw new Error('expected a safe integer')

    return (n % 2) === 1
}