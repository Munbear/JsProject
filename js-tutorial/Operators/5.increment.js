// 증가 & 감소 연산잔 Increment & Operators

let a = 0;
console.log(a);
a++; //a = a + 1;
console.log(a); // = 1
a--; // a = a -1;
console.log(a);

// 주의!
// a++ 필요한 연산을 하고, 그 뒤에 값을 증가시킴
// ++a 값을 먼저 증가하고 필요한 연산을 함
a = 0;
let b = a++;
console.log(b); // b에 0이 할당이 되고
console.log(a); // a는 1이 된다.

c = 0;
let b = ++c;
console.log(b);
console.log(c);

