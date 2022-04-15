/**
 * 함수 solution은 정수 x와 자연수 n을 입력 받아, x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴해야 합니다.
 * 다음 제한 조건을 보고, 조건을 만족하는 함수, solution을 완성해주세요.
 *
 * 제한조건
 * x는 -10000000(천만) 이상, 10000000(천만) 이하인 정수이다.
 * n는 1000 이하인 자연수이다.
 */


function solution(x,n) {
    let result = [];
    for(let i=0; i  < n; i++){
        result.push(x*(i+1))
    };
    return result;
};
console.log('myAnswer : ',solution(-4,2))


function bestAnswer(x, n) {
    return Array(n).fill(x).map( (v, i) => (i + 1) * v);
}
console.log('bestAnswer : ',bestAnswer(2,5));

function otherAnswer(x, n) {
    let answer = [];
    for(let i= 1; i <= n; i++){
        answer.push(x*i)
    }
    return answer
}

console.log('otherAnswer :',otherAnswer(3,4));