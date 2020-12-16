const currency1 = require('./currency1');
const Currency = require('./currency2');
let currency2 = new Currency(50);

const math1 = require('./myMathModule1');
const myMathModule = require('./myMathModule2');
let math2 = new myMathModule(231, 5);

console.log("\n===================CURRENCY 1 MODULE====================");
console.log("50 dollars - " + currency1.dollarsToPln(50) + " zł");
console.log("50 rubles  - " + currency1.rubleToPln(50) + " zł");
console.log("50 euro    - " + currency1.euroToPln(50) + " zł");
console.log("50 NOK     - " + currency1.nokToPln(50) + " zł");
console.log("50 GBP     - " + currency1.gbpToPln(50) + " zł");
console.log("========================================================\n");



console.log("\n===================CURRENCY 2 MODULE====================");
console.log("50 dollars - " + currency2.dollarsToPln() + " zł");
console.log("50 rubles  - " + currency2.rubleToPln() + " zł");
console.log("50 euro    - " + currency2.euroToPln() + " zł");
console.log("50 NOK     - " + currency2.nokToPln() + " zł");
console.log("50 GBP     - " + currency2.gbpToPln() + " zł");
console.log("========================================================\n");


console.log("\n===================MY MATH MODULE 1=====================");
console.log("231 + 5   = " + math1.add(231, 5));
console.log("231 - 5   = " + math1.sub(231, 5));
console.log("231 * 5   = " + math1.multiply(231, 5));
console.log("231 / 5   = " + math1.divide(231, 5));
console.log("231 + 5*3 = " + math1.addThreeTimes(231, 5));
console.log("========================================================\n");


console.log("\n===================MY MATH MODULE 2=====================");
console.log("231 + 5   = " + math2.add());
console.log("231 - 5   = " + math2.sub());
console.log("231 * 5   = " + math2.multiply());
console.log("231 / 5   = " + math2.divide());
console.log("231 + 5*3 = " + math2.addThreeTimes());
console.log("========================================================\n");