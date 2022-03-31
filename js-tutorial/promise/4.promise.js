/**
 * promise 무겁고 오래걸리는 일이 있다면
 * 코드 내부에서 비동기적으로 처리됨
 * then: 필요한 일을 수행
 * catch: 에러를 처리
 * finally: 최종적으로 무조건 호출한다
 * 프로미스는 비동기적으로 무언가를 수행하고 끝나면 알려준다
 *
 */


function runInDelay(seconds) {
    return new Promise((resolve, reject) => {
        if(!seconds || seconds < 0) {
            reject(new Error('Errorre'))
        }
        setTimeout(resolve, seconds + 1000);
    });

}
runInDelay().then(()=> {
    console.log('타이머 완료')
}).catch(error => console.log(error)).finally(()=>{
    console.log(
        'done'
    )});