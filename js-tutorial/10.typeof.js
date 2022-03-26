// typeof: 연산자는 데이터 타입을 확인 할 수 있다.
// 값을 타입 문자열로 반환
let variable;// undefined
console.log(typeof variable);

variable = ''; //string type
console.log(typeof variable);

variable = 123; // number type
console.log(typeof variable);

variable = {};
console.log(typeof variable);

variable = function () {};
console.log(typeof variable);

variable = Symbol();
console.log(typeof variable);

console.log(typeof 123);
console.log(typeof 'text');


