let student = { name:"박태현", major:"데이터학과", grade:2};
console.log(typeof(student));
console.log(student);

let jsonStr = JSON.stringify(student);
console.log(typeof(jsonStr));
console.log(jsonStr);

let obj = JSON.parse(jsonStr);
console.log(typeof(obj));
console.log(obj);