// hoisting 호이스팅은 끌어 올리다 라는 의미를 가지고 있다
// 자바스크립트 엔진 (번역기, interpreter)이 코드를 실행하기 전,
//     변수 , 함수 , 클래스의 선언문을 끌어 올리는 것을 말함


/**
 * 변수의 선언과 초기화를 분리한 후 선언만 코드의 최상단으로 끌어 올림
 */


print()
function print() {
    console.log('hello');
}

// 변수와 클래스는 선언만 호잇팅이 되고
// 초기화는 안된다.
// 초기화 전 변수에 접근하면 컴파일 에러가 발생함
console.log(hi);
let hi = 'hi';
let func1 = function () {
}
const Cat = new Cat() // because of this
class Cat {
     // error
}

let x = 1;
{
    console.log(x);
}

