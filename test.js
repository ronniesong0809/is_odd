'use strict'

require('mocha')
var assert = require('assert')
var isEven = require('./')

describe('isEven', function() {
    it('should return true if the number is even:', function() {
        assert(!isEven(0))
        assert(isEven(1))
    })

    it('should work with strings:', function() {
        assert(!isEven('0'))
        assert(isEven('1'))
    })

    it('should throw an error on bad args:', function() {
        assert.throws(function() {
            isEven()
        })
    })

    it('should throw an error on non-integer args:', function() {
        assert.throws(function() {
            isEven('1.1e0')
        })
    })
})