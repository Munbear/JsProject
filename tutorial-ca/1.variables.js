/**
 * 선언, 할당, 범위
 * var : 재선언 O 재할당 O 범위 function 안에서
 * let : 재선언 X 재할당 O 범위 { } 이런 블럭안에서
 * const : 재선언 X 재할당 X 범위 { } 이런 블럭안에서
 *
 * 변수의 Hoisting 현상 (호이스팅)
 * 호이스팅 현상 : 변수의 선언을 변수 범위 맨위로 끌고오는 현상
 * 변수를 만나면 선언부분을 강제로 맨위로 끌어올림
 *
 *
 *
 * 전역변수 : 모든 곳에서 쓸 수 있는 변수
 */

// const age = 20; // 전역번수 최상단에 만들면 밑에서 사용할 수 있다.
//
// function func() {
//     const age = 25; // 지역변수
//     console.log(age);
// }
//
// func()
// // window로 전역변수 만들기
// window.이름 = '김';
// console.log(이름)
//
// // ex
//
// if(true) {
//     let a = 1;
//     var b = 2;
//     if(true) {
//         let b =3;
//     }
//     console.log(b);
// }


/**
 * Q. 1~4 다음 코드의 콘솔창 출력결과는 무엇일까요?
 * func1();
 * function func1() {
 *     console.log(안녕);
 *     let 안녕 = 'hello!';
 * }
 * 출력 결과 : error
 * // 문제해설 :  let,const 호이스팅 시 undefined 자동으로 할당 안됨 따라서 Error 발생
 *
 *
 * func2();
 * var func2 = function() {
 *     console.log(안녕);
 *     var 안녕 = 'Hello!';
 * }
 * 출력결과: Hello!;
 * 해설 : var func2; 이 부분만 호이스팅이 됨 따라서 func2(); 는 함수가 아니라 error 발생한다.
 *
 *
 * let a = 1;
 * var func3 = function() {
 *     a = 2;
 * }
 * console.log(a);
 * 출력결과: 1
 * 해설 : let a = 1은 전역함수이고 콘솔은 밖에서 실행 했기 때문에 전역함수가 출력이 된다.
 *
 *
 * let a = 1;
 * var b = 2;
 * window.a = 3;
 * window.b = 4;
 * console.log( a + b);
 * 출력결과 : 3
 * 해설 : window.b = 4 로 재 할당했기 때문에
 * 1 + 4  이므로 5가 출력이됨
 *
 */

// Q. 아래의 코드가 왜 의도대로 동작하지 않는지 설명하시오
// 그리고 해결 방법은 무언가요?

// for(var i=1 ; i < 6; i++){
//     setTimeout( () => {
//         console.log(i);
//     }, i*1000);
// }

for(let i=1; i < 6; i++){
    setTimeout( () => {
        console.log(i);
    }, i*1000);
}


// Q. 아래의 코드는 왜 의도대로 동작하지 않는 것인가 설명해 보세요
// 그리고 해결 방법은 무엇인가요


// for(var i=0; i < 3; i++){
//     버튼들[i].addEventListener('click', function() {
//         모달창들[i].style.display = 'block';
//     });
// }





