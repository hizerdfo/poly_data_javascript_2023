let x = 10;
let y = 4;
let result = 0;

// 연산자 실습1
result = x + y--;
console.log(result); //14
console.log(y); //3
console.log("---");

// 연산자 실습2
// x : 10
// ++x : 11
// 11 - 3 = 8
result = ++x - y;   
console.log(result);
console.log(y);