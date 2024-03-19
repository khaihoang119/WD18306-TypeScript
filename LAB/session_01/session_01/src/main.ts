// var isCheck : boolean = true;
// isCheck = false;

console.log(isCheck);
let number1: number = 5;
let number2: number = 2.8;
let phrase: string = 'Result is ';
let permit: boolean = true;
const result = number1 + number2;
if (permit) {
    console.log(typeof(phrase + result));
} else {
    console.log('Not show result');
};
// function add(x=5){
//     let phrase = 'Result is ';
//     phrase = '10';
//     x = Number('2,8');

//     return phrase + x;
// }
// let resulta: number = add();

let hobbies:(string | number)[] = ['Sport','Cooking',3]
console.log(hobbies);

let hobbie: Array< string | number  > = ['Sport','Cooking',3]
console.log(hobbie);

enum Role{
    admin,
    client,
    supper_admin
};
let Person:{
    name: string,
    role: number
};
Person = {
    name:'Hoang',
    role: Role.admin
};

if(Person.role === 0){
    console.log('Admin');
}else if(Person.role === 1){
    console.log('Client');
}else{
    console.log('Super Admin');  
}
console.log(Person.role);


let userInput : unknown;
let userName: string;
userInput = 5;
userInput = 'Typescript';
userName = userInput as string;
userName = userInput as string;
if(typeof userInput === 'string'){
    userName = userInput;
}
console.log(userInput);
