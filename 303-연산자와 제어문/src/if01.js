
const currentYear = 2023; // 상수
let birthYear;
let age;

let birthStr;
let birthNum;
// birthStr = prompt("태어난 년도"); // 문자열
// birthNum = parseInt(birthStr); // 문자열 숫자로 변환
birthYear = parseInt( prompt("태어난 년도") );

age = currentYear - birthYear + 1;
if(age < 20) {
    alert("성인이 아닙니다.");
}

// 백틱 ES6 문법
alert(`${currentYear} 년 현재, ${age}세 입니다.`);
