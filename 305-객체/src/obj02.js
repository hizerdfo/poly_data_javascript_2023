// 객체의 선언은 {}로 할 수 있다.
const obj = {
    product: '7D 건조 망고', 
    type: "당절임",
    component: '망고, 설탕, 메타중아황산나트륨, 치자황색소',
    source: '필리핀'
};

//실습과제1, 위의 obj 모든 프로퍼티에 문자자열 뒤에 "!!" 붙여 보세요?
obj.product += "!!!";
obj.type += "!!!";
obj.component += "!!!";
obj.source += "!!!";

// 과제2, 프로퍼티가 증가, 감소가 되어도 유연하게 "===" 추가할 수 있도록 변경해 보세요?
// ???? 프로퍼티를 간접적으로 접근할 수 있는 방법을 고민.
// 객체[키] 접근하는 것이 유용하다.
for(let key in obj) {
    console.log(key);
    obj[key] += "===";
}

console.log(obj);



