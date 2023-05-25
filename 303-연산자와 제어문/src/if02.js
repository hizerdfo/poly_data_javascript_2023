function birthCheck() {
    // 내컴퓨터에 세팅된 날짜
    const date = new Date();
    const currentYear = date.getFullYear(); // 상수
    let birthYear;
    // let age;

    let birthStr;
    let birthNum;
    birthStr = prompt("태어난 년도"); // 문자열
    //console.log(birthStr); //null
    if (birthStr.length == 4){
        // 년도가 4자리 입니다 
        if(birthStr) {
            // 값
            console.log("태어난해" + birthStr);
            birthYear = parseInt( birthStr );
            console.log(birthYear);

            if (birthYear > 0){
                if (!isNaN(birthYear)){ // NaN이 아니라면
                    let age = currentYear - birthYear + 1; // 변수 선언과 동시에 할당
                    if(age < 20) {
                        alert("성인이 아닙니다.");
                    }
                
                    // 백틱 ES6 문법
                    alert(`${currentYear} 년 현재, ${age}세 입니다.`);
                } else {
                    alert('정확한 날짜가 아닙니다');
                }
            }
    
        } else {
            // null : 거짓
            console.log(birthStr);
        }
    } else{
        alert('정확한 년도를 입력해주세요');
    }
}

