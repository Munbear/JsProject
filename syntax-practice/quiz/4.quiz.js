/**
 * 정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.
 */

function average(arr) {
    let result = 0;
    for(let i=0; i < arr.length; i++) {
        result += arr[i]
    }
    return result/arr.length;
}
console.log('결과값 : ',average([5,5]));

function bestAnswer(array) {
    return array.reduce( (a,b) => a + b) /array.length;
}

console.log('best answer : ',bestAnswer([1,2,3,4]))
