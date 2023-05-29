// 클래스 선언
class Book {
    // 생성자 선언
    // 2개 매개변수 입력 받는다.
    constructor(title, price) {
        //생성자의 역할은
        // 매개변수로 받은 값을 동적 프로퍼티로 설정한다.
        this.title = title;
        this.price = price;
    }

    //메소드
    buy() {
        console.log(`${this.title}을 ${this.price}원에 구매`);
    }
}

/*
let boo = new Book("자료구조", 15000);
console.log(boo); // 프로퍼티만 출력
boo.buy(); // 메소드를 호출한다.
*/

// Book 상속 받는 클래스
class Textbook extends Book {
    constructor(title, price, major) {
        // 상위 클래스의 생성자를 호출
        super(title,price);

        // major 동적 프로퍼티를 생성
        this.major = major;
    }

    buyTextBook() {
        console.log(`${this.major} 전공서적, ${this.title}을 구매`);
    }
}

let bar = new Textbook('알고리즘',2000,"전공필수");
console.log(bar);

