/**
 * 정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.
 */

function average(arr) {
    return Math.max(...arr) % 2 ;
}

console.log('결과값 : ',average([5,5]));