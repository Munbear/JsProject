// 단항연산자 Unary Operators
// + (양)
// - (음)
// ! (부정)

let a = 5;
a = -a; // -1 * 5
console.log(a)
a = -a;
console.log(-a)
a = -a;


let boolean = true;
console.log(boolean); // true 가 나옴
console.log(!boolean) //  false 가 나옴
console.log(!!boolean) // true로 다시 바뀜


// + 슛자가 아닌 타입들을 숫자로 변환하면 어떤값이 나오는지 확인할 수 있음


/console.log(!!1); // !부정연산자
// !! 값을 boolean 타입으로 변환함! 