/**
 * 심볼은 object 자료형의 key 값으로 사용할 수 있다
 */

console.log('--------------------------------------------');
let weight = Symbol('비밀 몸무게');
let height = Symbol('비밀 키');
let person = {
    name : 'bak',
}
person.weight = 70;
person[weight] = 85;
person[height] = 170;
console.log(person)

console.log('--------------------------------------------');
for(let key in person){
    console.log(person[key]);
}

console.log('----------------특징-------------');

let a = Symbol('설명1');
let b = Symbol('설명2');
// 전역 심볼
let c = Symbol.for('설명3');
let d = Symbol.for('설명4');

console.log('--------------------------------------------');

let arr = [2,3,4];
console.log(arr[Symbol.iterator]);