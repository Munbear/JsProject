/**
 * 함수의 default 파라미터
 */

function 임시함수() {
    return 10
}

function plus(a,b = 임시함수()) {
    // b의 파라미터 값을 안넣었을때 10이라는 값이 들어온다.
    // default 파라미터는 연산자 값도 넣을 수 있다
    // 함수도 입력이 가능하다.

    console.log(a + b)
}

plus(1);


/**
 * 함수의 arguments
 */

console.clear()
function func(a,b,c) {
    console.log('arguments',arguments[0])
    console.log('arguments',arguments[1])
    console.log('arguments',arguments[2])
    console.log(a,b,c,) // a,b,c 를 arguments라고 한다.
}
func(1,2,3);

// 입력한 파라미터를 전부 콘솔창에 출렷해주는 함수는 ?
// arguments는 파라미터 값을 모두 받아두는 것
function func2() {
    for(let i =0; i < arguments.length; i++){
        console.log(arguments[i]);
    }
}

func2(2,3,5);