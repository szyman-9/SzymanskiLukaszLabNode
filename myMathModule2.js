let MyMathModule = function (a, b){
    this.a = a;
    this.b = b;
}

MyMathModule.prototype.add = function(){
    return this.a + this.b;
}

MyMathModule.prototype.sub = function(){
    return this.a - this.b;
}

MyMathModule.prototype.multiply = function(){
    return this.a * this.b;
}

MyMathModule.prototype.divide = function (){
    return this.a / this.b;
}

MyMathModule.prototype.addThreeTimes = function (){
    return this.a + (this.b*3);
}

module.exports = exports = MyMathModule;