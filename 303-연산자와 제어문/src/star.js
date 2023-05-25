let stars = []; // 배열선언

function create() {
    let temp = []; // 배열선언

    // 문자열로 초기화
    for(let i=0;i<5;i++) temp[i] = "";

    // 배열에 별표 만들기
    for(let i=0; i<5; i++) {
        for(let j=1; j<=i+1; j++) {
            temp[i] += "*";            
        }

        for(let j=1;j<(5-i);j++) {
            temp[i] += " ";
        }
    }

    return temp;
}



stars = create();
//print(stars);

function mirror(stars) {
    let temp = []; // 배열선언

    // 문자열로 초기화
    for(let i=0;i<5;i++) temp[i] = "";

    for(let i=0; i<stars.length; i++) {
        for(let j=stars.length;j>=0;j--){
            if(stars[i][j] == undefined) {
                temp[i] += " ";
                continue;
            }
            temp[i] += stars[i][j];
        }    
    }

    return temp;
}

let mir = mirror(stars);
for(let i=0; i<5;i++) {
    stars[i] += mir[i];
}


function reverse(stars) {
    let temp = []; // 배열선언

    for(let i=stars.length-1; i>=0; i--) {
        temp.push(stars[i]);
    }
    return temp;
}

rev = reverse(mir);
revmir = mirror(rev);
for(let i=0; i<5;i++) {
    rev[i] += revmir[i];
}

for(let i=0; i<5;i++) {
    stars.push(rev[i]);
}

print(stars);

function print(stars) {
    // 완성된 별표 출력하기
    for(line of stars) {
        console.log(line);
    }
}
