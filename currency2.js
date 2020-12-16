let Currency = function(pln){
    this.number = pln;
}

function roundTwoDecimals(amount){
    return Math.round(amount*100)/100;
}

Currency.prototype.euroToPln = function(){
    return roundTwoDecimals(this.number * 4.44);
}

Currency.prototype.dollarsToPln = function(dollars){
    return roundTwoDecimals(this.number * 3.64);
}

Currency.prototype.rubleToPln = function(ruble){
    return roundTwoDecimals(this.number * 0.05);
}

Currency.prototype.nokToPln = function(nok){
    return roundTwoDecimals(this.number * 0.42);
}

Currency.prototype.gbpToPln = function (){
    return roundTwoDecimals(this.number * 4.91);
}

module.exports = exports = Currency;