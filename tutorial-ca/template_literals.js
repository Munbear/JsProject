// let text = '손흥민';
// console.log(text);
//
// let text2 = '박지성';
// console.log(text2);


/**
 * 백틱 장점
 * 1. 엔터키 가능
 * 2. 중간에 변수 넣기 쉽다 // ES6 방식 `text${변수}`
 * 3. 문자열 + 함수
 */
//
// function func(a, b) {
//     console.log(a)
//     console.log( a[1]+ b + a[0] );
//     console.log(b);
// }
// func`안녕하세요${ text }입니다${ text2 }`;


let pants = 0;
let socks = 100;

// function func2(a, b, b1) {
//     console.log( a[1] + b + a[0] + b1);
// }

function 해체분석기(글자들, 변수들1, 변수들2){
    if( 변수들1 === 0) {
        console.log(`바지다팔렸어요 양말` + 변수들2)
    }
}



해체분석기`바지${pants} 양말${socks}`;