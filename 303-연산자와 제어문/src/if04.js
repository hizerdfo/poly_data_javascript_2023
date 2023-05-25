let userNumber = prompt("숫자를 입력하세요");
console.log(userNumber);

if(userNumber) {
    userNumber = parseInt(userNumber);
    (userNumber%2) ? alert(`${userNumber}: 홀수`) : alert(`${userNumber}:짝수`);
}