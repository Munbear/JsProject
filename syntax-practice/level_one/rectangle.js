/**
 * num이 짝수일 경 "Even"을 반환 하고 홀수일 경우 "Odd"를 반환 해라
 *
 * num이 짝수 인지 아닌지 확인하기
 * num이 짝수 이면 return "Even"
 * num이 홀 수 이면 return "Odd"
 *
 */


function getEvenOdd(num) {
    let result = ""
    if(num % 2){
        return result + "Even";
    } else {
        return result + "Odd";
    }
}


// getEvenOdd(3);
console.log(getEvenOdd(4));
console.log(getEvenOdd());

function bestFunc(num) {
    return num % 2 ? "Odd":"Even";
}

console.log(bestFunc(4));
console.log(bestFunc(5));