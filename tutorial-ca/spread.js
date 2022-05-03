/**
 * - spread operator
 *
 */

// 1. 어레이에 붙이면 대괄호를 빼고 나열해준다.
let arr = ['hello', 'world'];

console.log('hello', 'world')
console.log(...arr);

let text = 'ola';
console.log(text);
console.log(...text); // spread 사용하면
console.log('o','l','a'); // 이렇게 되는거랑 같다

// 활용 예
let a = [1,2,3];
let b = [4,5];
let c =[...a, ...b]; // a 랑 b의 배열을 합칠 수 있다
console.log(c);

/// spread 연산자는 deep copy할때 많이 사용된다.


// object도 합칠 수 있다.

let obj = {
    a : 1,
    b : 2,
}
let obj2 = {
    ...obj,
    c : 3
}

let obj1 = {
    a : 1,
    b : 2,
}

let obj3 ={
    a : 2,
    a : 1,
    ...obj1,
    aaa: 123123
}
console.log(obj3);
console.log(obj2);

// ...은 중갈호, 대괄호, 함수 소괄호 안에서만 사용할 수 있다.
// 함수 파라미터에 넣을때도 spread 연산자를 사용할 수 있다
console.clear();
function plus(a,b,c) {
    console.log(a + b + c)
}

// 아래의 어레이를 파라미터로 넣고 싶으면 spread 연산자를 사용해서 파마라미터로 넣을 수 있다
let nums = [10,20,30];
plus(...nums); // 요즘 방식
plus.apply(undefined, nums); // 옛날 방
plus(nums[0], nums[1], nums[2]) // 주먹구구식

// apply함수는?
let person = {
    인사 : function() {
        console.log('안녕');
    }
}
let person2 = {
    name : '손흥민'
}

person.인사.apply(person2);
person.인사.call(person2,);

