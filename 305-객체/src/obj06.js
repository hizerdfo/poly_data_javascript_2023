const test = {
    // 선언적 익명함수
    foo: function () {
        console.log("foo 메소드의 this");
        // this, 자신의 메소드를 가지고 있는 상위 객체(test)를 가리킵니다.
        console.log(this);
    },

    // 화살표함수
    bar: () => { 
        console.log("bar 메소드의 this");
        // 함수도 객체이다? 자바스크립트만의 특징.
        // 화살표함수는, 자신의 메소드를 가지고 있는 상위 객체(test)를 가리키지 않고(x)
        // 자기 자신의 함수의 객체를 가리킨다.
        console.log(this);
    }
}
    
// 메소드를 호출합니다.
test.foo(); // test의 객체 this가 출력됨
test.bar(); // 함수의 this가 출력됨
    