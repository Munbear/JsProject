/**
 * async 는 함수 앞에 사용할 수 있다
 * await 은 async 안에서 사용할 수 있는 키워드이다.
 * await은 promise 실패시 에러가 발생하고 멈춘다
 */

// async function plus() {
//     let promise = new Promise( (resolve, reject) => {
//         let operator = 1 + 1;
//         resolve(operator);
//     });
//     try {
//         let result = await promise;
//         console.log(result);
//     } catch {
//         console.log('프로미스 연산이 실패했어요')
//     }
// }
//
// plus();

async function promise() {
    document.getElementById('btn'),addEventListener('click', () => {
        return '성공했어요'
    });
}

async function clickHandler() {
    let result = await promise();
    console.log(result);
}

clickHandler();
