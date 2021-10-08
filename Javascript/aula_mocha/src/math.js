class Math{
    sum = function sum(a, b){
        return a + b;
    }
    multiply = function multiply(a,b){
        return a * b;
    }
    printSum = function printSum(req, res, a, b){
        return res.load('index', a + b);
    }
}

module.exports = Math