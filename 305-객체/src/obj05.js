// 객체를 선언
const student = {}; // 빈객체

// name, dream
const poly = [
    ['박태현',"꿈의 개발자","술마시가"],
    ['박준하',"최고 연봉자","당구치기"],
    ['정수영','노벨 개발자',"달리기"]
];

// poly에 있는 2차원 배열을, 객체로 변환하는 코드를 작성
// 반복문
let colums = ["name","dream","hobby","score","aaa"];
let empty = false;

for(let item of poly) {
    //console.log(item);
    let col = {}; // 초기화
    for(let i=0; i<colums.length;i++) {
        if(item[i] == undefined) {
            if(empty){
                continue;
            } 
            else {
                col[ colums[i] ] = "";
            }
        } else {
            col[ colums[i] ] = item[i];
        }
        
    }
    //console.log(col);

    let key = item[0];
    student[key] = col;
}

console.log(student);

