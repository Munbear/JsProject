/**
 * 콜백함수는 함수 다자인 패턴일 뿐
 * Promise 도 패턴중 하나이다.
 * Promise 는 성공/실패 판정 기계
 * Promise 는 무언가 순차적으로 실행을 위해 콜백함수 대신
 * 사용할 수 있는 코딩 패턴이다.
 */

let promise = new Promise( (성공, 실패) => {
    let 어려운연산 = 1 + 1 ;
    성공(어려운연산); // 성공 결과가 덴함수 안까지 가져감
});


promise.then( (결과) => {
    // 포르미스가 성공일 경우 실행할 코드
    console.log('성공했어요');
    console.log(결과);
}).catch( () => {
    // 실패했을때 실행할 코드
    console.log('실패했어요');
})

console.clear();


let testPromise = new Promise( (resolve,rejected) => {
    setTimeout( () => {
        resolve();
    }, 2000)
});

//fetch().then().catch() // promise 를 return함


testPromise.then( () => {
    console.log('성공')
}).catch( () => {
    console.log('실패')
})



