function calc() {
    var currentYear =2019;
    var birthYear = prompt("태어난 연도를 입력하시요", "YYYY");
    var age;

    age = currentYear - birthYear + 1;
    console.log(age);
}