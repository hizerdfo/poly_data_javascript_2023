for(let i=1; i<=10; i++) {
    if(i%2) {
        // 나머지 값이 있음
        // 홀수
        continue; // 반복문의 코드블럭 처음으로 이동
    } else {
        // 0
        // 나머지 값이 없음
    }
    console.log(i);
}