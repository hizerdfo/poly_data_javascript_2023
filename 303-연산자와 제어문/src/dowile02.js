let i = 5;
let status = false;
do {
    // 첫 시작시 상태값 변경해.
    status= true;

    // 한번은 실행해 주어야 하는 상태가 됨.
    console.log(i);
    i--;
    if(i==0) status = false
} while (status)



