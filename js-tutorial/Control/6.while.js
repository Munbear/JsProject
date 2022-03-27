// while(조건) {}
// 조건이 fasle가 될때까지 { } 코드를 반복 실행

let num = 5;
while (num >= 0) {
    console.log(num);
    num--;
}

let isActive = false;
let i = 0;
while (isActive) {
    console.log('still alive');
    if(i === 1000) {
        break
    }
    i++
}

do {
    //do while은 한번은 무조건 실해함
    console.log('do-while alive');
} while (isActive);