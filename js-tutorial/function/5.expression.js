// 함수 선언문 function name() { }
// 한수 표현식 const name = function() { }
// 화살표 함수 const name = () => {}
let add = function (a, b){
    return a + b;
};

console.log(add(1,2))

// 화살표 함수 const name = () => {}

add =(a,b)=>a+b
add = (a, b) => {
    return a+b;
}

// 생성장 함수 const object = new Function();


//IIFE (즉각 실행 함수)
(function run() {
    console.log('test')
}) ();
