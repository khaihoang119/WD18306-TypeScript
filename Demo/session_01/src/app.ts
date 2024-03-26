let strTS: string = "welcome to this course";
console.log(strTS);
let strTS1: string = "welcome to this course welcome to this course welcome to this course welcome to this course welcome to this course welcome to this course welcome to this course welcome to this course" ;
console.log(strTS1);
function getvalue() {
    
}
function name1():string{
    return 'im khaihoang';
    
}
name1();
let namea = (): number =>{
    return 213;
}

interface Myobject{
    id:number,
    name?:string
}
function getId(obj:Myobject):string{
    
    return `sdfds ${obj.name} ${obj.id}`;
}
let Myobject:Myobject={
    id: 1,
    name: "kah"
}
console.log(getId(Myobject));
let sum = (x:number=5, y:number)=> x+y;
let printOuput = (output: number|string) => console.log(output);
printOuput(sum(undefined,6))

let person: {
    name:string,
    age:number
}={
    name:"Typescript",
    age: 11
}
const salary:{
    grade: string,
    basic:string
}={
    grade: 'a',
    basic: '$2900'
}
const sumary = {...person, ...salary};
console.log(sumary);

class Deparment{
    name:string;
    private email:string = "hoang";
    readonly phone:string = '123123';
    constructor(name:string){
        this.name = name;
    }
    getName(){
        return this.name;
    }
    protected getId(){
        return 123;
    }
}
const n = new Deparment("khai hoang")
console.log(n.getName());

class ITDepartment extends Deparment{
    age: number;
    constructor(name:string, age:number){
        super (name);
        this.age = age;
    } 
}
interface IPerson{
    name:string;
    age: number;
    hello(text:string):void;
}

let user1: IPerson;
user1 = {
    name: "Khai Hoang",
    age: 19,
    hello(text:string) {
       return text;
    }
};
console.log(user1.hello("Xin chao"));
 interface IPeople extends IPerson{
    email:string;
    say(hi:string):void;
 }

 class Student implements IPeople {
    email:string;
    age:number;
    name:string;
    constructor( name: string,  age: number,  email: string) {
        this.email = email;
        this.age = age;
        this.name = name
    }

    hello(text: string): void {
        console.log(text);
    }

    say(hi: string): void {
        console.log(hi);
    }
}

type Combinable = string | number;
type Numberic = number | boolean;
type Universal = Combinable & Numberic;


function add(a: Combinable, b: Combinable){
    if(typeof a === 'string' || typeof b === 'string'){
        return a.toString() + b.toString();
    }
    return a+b;
}

type test1 = number | string;
type test2 = number | boolean;
type test = test1 & test2;
const check:test = 123;

function addd(a:test1, b:test1){
    if(typeof a === 'string' || typeof b ==='string'){
        return a.toString() + b.toString();
    }
    return a + b;
};
console.log(add('Khai Hoang', 'am ok'));
console.log(add(1,2));

class Car{
    name:string;
    constructor(n:string){
        this.name = n;
    }
    drive(){
        console.log('driving........ car');        
    }
}

class Truck{
    name:string;
    constructor(n:string){
        this.name = n;
    }
    drive(){
        console.log('driving.... Truck');
        
    }
    loadGoTruck(amount: number){
        console.log(amount);
        
    }
}

type Vehicle = Car | Truck;

const v1 = new Car('taxi');
const v2 = new Truck('Xe tai');

 function getVehicle(vehicle: Vehicle) {
    console.log(vehicle.name); 
    if(vehicle instanceof Truck){
        console.log(vehicle.loadGoTruck(2000));      
    }
 }
 
getVehicle(v2);

interface Bird{
    type: 'Bird',
    flyingSpeed: number,
}
interface Horse{
    type: 'Horse',
    runningSpeed: number,
}
type Animal = Bird | Horse;

function getinfoAnimal(animal: Animal){
    return animal;
}
let bird: Bird;
bird = {
    type: 'Bird',
    flyingSpeed: 300
}
console.log(getinfoAnimal(bird));

let hiii: any = 'hello';

function indentity<T>(arg: T): T{
    return arg;
}
console.log(indentity(123));
console.log(indentity('imhhonag'));
let obj = {
    name: "Hoang",
    age:23
}
console.log(indentity(obj));




interface Employee{
    name: string,
    privileges: string, 
}
interface Admin{
    name: string,
    startDate: string,
}
let Employee : {
    name: "Khai Hoang",
    privileges: 'khaihoang',
}
let Admin : {
    name: 'hoang',
    startDate: '1/11/1000'
}
type UnknowEmployee = Employee | Admin;
function printEmployeeInformation(emp: UnknowEmployee){
    console.log('Name: ' + emp.name);
    if('privileges' in emp){
        console.log('Privileges: ' + emp.privileges);
        
    }
    if('startDate' in emp){
        console.log('Start Date: ' + emp.startDate);   
    }
}
