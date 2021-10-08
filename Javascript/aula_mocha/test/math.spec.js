const assert = require('assert');
const Math = require('../src/math.js');
const expect = require('chai').expect;
const sinon = require('sinon');

let value = 0;

describe('Math  class', function(){
    beforeEach(function () {
        value = 0;
    })

    it('Sum two numbers', function(){
        const math = new Math();
        value = 5;

        //assert.equal(math.sum(value,5), 10);
        math.sum(value,5, value=>{
            expect(value).to.equal(10);
            
        });
    });

    it('Multiply Numbers', function(){
        const math = new Math();

        //assert.equal(math.multiply(value,5), 0);
        expect(math.multiply(value,5)).to.equal(0);
    });

    it.only('Calls res with sum and index values', function () {
        const req = {};
        const res = {
            load: sinon.spy()
        };
        const math = new Math();

        math.printSum(req, res, 5, 5);

        expect(res.load.calledOnce).to.be.true;
    });


});