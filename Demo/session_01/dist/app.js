"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var strTS = "welcome to this course";
console.log(strTS);
var strTS1 = "welcome to this course welcome to this course welcome to this course welcome to this course welcome to this course welcome to this course welcome to this course welcome to this course";
console.log(strTS1);
function getvalue() {
}
function name1() {
    return 'im khaihoang';
}
name1();
var namea = function () {
    return 213;
};
function getId(obj) {
    return "sdfds ".concat(obj.name, " ").concat(obj.id);
}
var Myobject = {
    id: 1,
    name: "kah"
};
console.log(getId(Myobject));
var sum = function (x, y) {
    if (x === void 0) { x = 5; }
    return x + y;
};
var printOuput = function (output) { return console.log(output); };
printOuput(sum(undefined, 6));
var person = {
    name: "Typescript",
    age: 11
};
var salary = {
    grade: 'a',
    basic: '$2900'
};
var sumary = __assign(__assign({}, person), salary);
console.log(sumary);
var Deparment = /** @class */ (function () {
    function Deparment(name) {
        this.email = "hoang";
        this.phone = '123123';
        this.name = name;
    }
    Deparment.prototype.getName = function () {
        return this.name;
    };
    Deparment.prototype.getId = function () {
        return 123;
    };
    return Deparment;
}());
var n = new Deparment("khai hoang");
console.log(n.getName());
