// return을 명시적으로 하지 않으면 자동으로 undefined가 반환됨!
function add(a, b){
    // return a + b;
}
const result = add(1,2);
console.log(result);

// return을 하지 않아도 되는 함수에서는 굳이 return을 할 필요가 없다.

//  return을 함수 중간에 하게 되면 함수가 종료됨
// 사용예: 조건이 맞지 않는 경우 함수 도입부분에서 함수를 일찍이 종료함!
function print(num) {
    if(num < 0) {
        return; // return undefined 와 같다
    }
    console.log(num);
}
print(-2)