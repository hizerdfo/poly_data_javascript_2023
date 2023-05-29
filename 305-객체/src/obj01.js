// 객체의 선언은 {}로 할 수 있다.
const obj = {
    product: '7D 건조 망고', 
    type: "당절임",
    component: '망고, 설탕, 메타중아황산나트륨, 치자황색소',
    source: '필리핀'
};
// 객체 확인
console.log(obj);

console.log("---");

// 프로퍼티 접근1 => 기본적인 사용법
console.log(obj.product);
console.log(obj.type);
console.log(obj.component);
console.log(obj.source);

console.log("---");

// 프로퍼티 접근2 => 동적으로 프로그래밍 할때 매우 유리하다.
console.log(obj['product']);
console.log(obj['type']);
console.log(obj['component']);
console.log(obj['source']);

console.log("---");

// 뭐가 유리한가요? 2번이?
let name = "product";
// 키 접근을 해야되는데, 
// 간접적으로 쿠션을 통하여 프로퍼티에 접근할 수 있음
console.log(obj[name]); 

name = "type"; //변수값을 변경합니다.
console.log(obj[name]); 





