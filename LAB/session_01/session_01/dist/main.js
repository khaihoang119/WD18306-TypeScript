"use strict";
// var isCheck : boolean = true;
// isCheck = false;
console.log(isCheck);
var number1 = 5;
var number2 = 2.8;
var phrase = 'Result is ';
var permit = true;
var result = number1 + number2;
if (permit) {
    console.log(typeof (phrase + result));
}
else {
    console.log('Not show result');
}
;
// function add(x=5){
//     let phrase = 'Result is ';
//     phrase = '10';
//     x = Number('2,8');
//     return phrase + x;
// }
// let resulta: number = add();
var hobbies = ['Sport', 'Cooking', 3];
console.log(hobbies);
var hobbie = ['Sport', 'Cooking', 3];
console.log(hobbie);
var Role;
(function (Role) {
    Role[Role["admin"] = 0] = "admin";
    Role[Role["client"] = 1] = "client";
    Role[Role["supper_admin"] = 2] = "supper_admin";
})(Role || (Role = {}));
;
var Person;
Person = {
    name: 'Hoang',
    role: Role.admin
};
if (Person.role === 0) {
    console.log('Admin');
}
else if (Person.role === 1) {
    console.log('Client');
}
else {
    console.log('Super Admin');
}
console.log(Person.role);
// let userInput: any = 'This is a string';
// // let strLenght: number = (<string>userInput).length;
// let strLenght: number = (userInput as string).length
// console.log(strLenght);
var userInput;
var userName;
userInput = 5;
userInput = 'Typescript';
userName = userInput;
userName = userInput;
if (typeof userInput === 'string') {
    userName = userInput;
}
console.log(userInput);
