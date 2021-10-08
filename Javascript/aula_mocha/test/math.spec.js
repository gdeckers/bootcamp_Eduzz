const assert = require('assert');
const Math = require('../src/math.js');

let value = 0;

describe('Math  class', function(){
    beforeEach(function () {
        value = 0;
    })

    it('Sum two numbers', function(){
        const math = new Math();
        value = 5;

        assert.equal(math.sum(value,5), 10);
    });

    it('Multiply Numbers', function(){
        const math = new Math();

        assert.equal(math.multiply(value,5), 0);
    });


});