//test//unit1.test.js
const assert = require('assert');//import assert module
//assert module is a built-in module that does not require installation
const isEven = require('../src/unit1');
//import the isEven function through the provided relative path

describe('isEven function', function() {
    //the describe groups related tests together in mocha
    it('should return true for even numbers', function() {
        assert.equal(isEven(4), true);

    });

    it('should return false for odd numbers', function() {
        assert.equal(isEven(5), false);
    });

    it('should throw an error if input is not a number', function() {
        assert.throws(() => isEven("a"), /Input must be a number/);
    });

})