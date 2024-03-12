//Câu 1
let isCheck : boolean;
let role : number = 1;
let msg : string;
if ( role === 1){
    isCheck = true;
    msg = 'Admin';
    console.log(msg);
    
}else{
    msg = 'Không phải là admin';
    console.log(msg); 
};
let Personn: {id : number, name : string, address: string, birthday: string, phone : string};

 let Person1 =  Personn  = {id: 1, name: 'khai hoang', address: 'Can Tho', birthday: '26/09/2004', phone: '0326094031'};
console.log(Person1);
let Person2 =  Personn = {id: 1, name: ' hoang', address: 'Can Tho', birthday: '26/09/2004', phone: '0326094031'};
console.log(Person2);