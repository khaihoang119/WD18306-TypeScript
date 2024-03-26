"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var ITDepartment = /** @class */ (function (_super) {
    __extends(ITDepartment, _super);
    function ITDepartment(name, age) {
        var _this = _super.call(this, name) || this;
        _this.age = age;
        return _this;
    }
    return ITDepartment;
}(Deparment));
var user1;
user1 = {
    name: "Khai Hoang",
    age: 19,
    hello: function (text) {
        return text;
    }
};
console.log(user1.hello("Xin chao"));
var Student = /** @class */ (function () {
    function Student(name, age, email) {
        this.email = email;
        this.age = age;
        this.name = name;
    }
    Student.prototype.hello = function (text) {
        console.log(text);
    };
    Student.prototype.say = function (hi) {
        console.log(hi);
    };
    return Student;
}());
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
var check = 123;
function addd(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
;
console.log(add('Khai Hoang', 'am ok'));
console.log(add(1, 2));
var Car = /** @class */ (function () {
    function Car(n) {
        this.name = n;
    }
    Car.prototype.drive = function () {
        console.log('driving........ car');
    };
    return Car;
}());
var Truck = /** @class */ (function () {
    function Truck(n) {
        this.name = n;
    }
    Truck.prototype.drive = function () {
        console.log('driving.... Truck');
    };
    Truck.prototype.loadGoTruck = function (amount) {
        console.log(amount);
    };
    return Truck;
}());
var v1 = new Car('taxi');
var v2 = new Truck('Xe tai');
function getVehicle(vehicle) {
    console.log(vehicle.name);
    if (vehicle instanceof Truck) {
        console.log(vehicle.loadGoTruck(2000));
    }
}
getVehicle(v2);
function getinfoAnimal(animal) {
    return animal;
}
var bird;
bird = {
    type: 'Bird',
    flyingSpeed: 300
};
console.log(getinfoAnimal(bird));
var hiii = 'hello';
function indentity(arg) {
    return arg;
}
console.log(indentity(123));
console.log(indentity('imhhonag'));
var obj = {
    name: "Hoang",
    age: 23
};
console.log(indentity(obj));
var Employee;
var Admin;
function printEmployeeInformation(emp) {
    console.log('Name: ' + emp.name);
    if ('privileges' in emp) {
        console.log('Privileges: ' + emp.privileges);
    }
    if ('startDate' in emp) {
        console.log('Start Date: ' + emp.startDate);
    }
}
