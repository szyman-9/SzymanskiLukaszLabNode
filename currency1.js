function roundTwoDecimals(amount){
    return Math.round(amount*100)/100;
}

exports.euroToPln = function(euro){
    return roundTwoDecimals(euro * 4.44);
}

exports.dollarsToPln = function(dollars){
    return roundTwoDecimals(dollars * 3.64);
}

exports.rubleToPln = function(ruble){
    return roundTwoDecimals(ruble * 0.05);
}

exports.nokToPln = function(nok){
    return roundTwoDecimals(nok * 0.42);
}

exports.gbpToPln = function (gbp){
    return roundTwoDecimals(gbp * 4.91);
}