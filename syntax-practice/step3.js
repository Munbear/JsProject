/**
 * [ 제일 작은 수 제거 하기 ]
 *
 * 배열에서 가장 작은 수를 제거하고 나머지 배열을 리턴하라
 * 만약 리턴하는 배열이 빈 배열이거나 [10] 이면 -1 를 리턴하세요
 * **/

function solution(arr) {
    arr.splice(arr.indexOf(Math.min(...arr)), 1);
    return arr.length ? arr : [-1];
};

console.log(solution([4,3,2,1,]))
console.log(solution([10]))