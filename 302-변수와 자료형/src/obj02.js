// 상수로 선언
const kim = {
    firstname: "john",
    lastname: "kim",
    age: 35,
    address: "seoul"
};

console.log(kim);
console.log("이름: " + kim.firstname);
console.log("성: " + kim.lastname);
console.log("나이: " + kim.age);
console.log("주소: " + kim.address);

// 상수에 다른 객체 할당.
// 상수는 변경을 할 수 없습니다.
kim = {
    firstname: "남훈",
    lastname: "kim",
    age: 19,
    address: "seoul"
};

console.log(kim);
console.log("이름: " + kim.firstname);
console.log("성: " + kim.lastname);
console.log("나이: " + kim.age);
console.log("주소: " + kim.address);