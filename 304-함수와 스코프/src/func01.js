// 선언
// 자바스크립트 내부에 함수 목록에 등록이 됩니다.
function hello() { // 함수의 이름을 = "hello"
    console.log("안녕하세요.");
}

// 호출
hello();


let greeting = function () {
    console.log("반갑습니다.");
}

greeting();
console.log(typeof(greeting));
