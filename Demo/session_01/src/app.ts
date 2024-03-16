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
