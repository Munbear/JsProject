// 동등 비교 관계 연상자 (Equality operators)
// == 값이 같음
// != 값이 다름
// === 값과 타입이 둘다 같음
// !== 값과 타입이 다름
console.log( 2 == 2);
console.log( 2 != 2);
console.log( 2 != 3);
console.log( 2 == 3);
console.log( 2 == '2');
console.log( 2 === '2');
console.log(true == 1);
console.log( true === 1);
console.log( false == 0);
console.log( false === 0);

//////////////////////////
const obj1 = {
    name:'js'
};
const obj2 = {
    name:'js'
};

console.log(obj1 == obj2); // false 가 나옴
console.log(obj1 === obj2); // 서로다른 메모리에 할당이되어 값 자체가 다르므로 false 임
console.log(obj1.name == obj2.name);
console.log(obj1.name === obj2.name);

let obj3 = obj2;
console.log(obj3 == obj2);
//true
console.log(obj3 === obj2);
//true

6,7,8,9,10,11, 12,13,14,15,16,17,18,19,20,21,22

1,2,3,4,5,6,7,8,9, 10,11,12,13,14,15,16,17