"use strict";
//Arrow function
function sum() {
    const nums = [1, 2, 3, 4]; // ví dụ các số cần tính tổng
    let total = 0;
    for (let num of nums) {
        total += num;
    }
    return total;
}
// Arrow function
const sumArrow = () => {
    const nums = [1, 2, 3, 4]; // ví dụ các số cần tính tổng
    let total = 0;
    for (let num of nums) {
        total += num;
    }
    return total;
};
// Sử dụng
console.log(sum()); // Output: 10
console.log(sumArrow()); // Output: 10
//hàm arrow function tính tổng 2 số
const sumTwoNumbers = (a = 0, b = 0, ...rest) => {
    let total = a + b;
    for (let num of rest) {
        total += num;
    }
    return total;
};
// Sử dụng
console.log(sumTwoNumbers(1, 2)); // Output: 3
console.log(sumTwoNumbers(1, 2, 3, 4)); // Output: 10
//merging array with spread aperator
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const mergedArray = [...arr1, ...arr2];
console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6]
// Khai báo hàm có kiểu trả về là void
function greet(name) {
    console.log(`Hello, ${name}!`);
}
// Kiểu dữ liệu Function
let greetFunction;
// Gán hàm vào biến có kiểu dữ liệu Function
greetFunction = greet;
// Sử dụng
greetFunction("John"); // In ra: "Hello, John!"
// Hàm không bao giờ trả về (never)
function throwError(message) {
    throw new Error(message);
}
// Kiểu dữ liệu void
let voidValue;
// Gán giá trị undefined vào biến có kiểu dữ liệu void
voidValue = undefined;
// Sử dụng
try {
    throwError("An error occurred");
}
catch (error) {
    if (error instanceof Error) {
        console.error(error.message); // In ra: "An error occurred"
    }
}
// Hàm có tham số là một callback
function performOperation(x, y, callback) {
    const result = x + y;
    callback(result);
}
// Sử dụng
const myCallback = (result) => {
    console.log(`Result is: ${result}`);
};
performOperation(3, 4, myCallback); // In ra: "Result is: 7"
