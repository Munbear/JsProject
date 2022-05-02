/**
 * Arrow function 장점
 * 1. 입출력 기계를 만들때 보기 쉽다
 * 2. 파라미터가 1개면 소괄호 생략이 가능
 * 3. return 이 한줄이면 중괄호도 생략이 가능하다.
 */

let 함수 = a => console.log(a);
함수(5);

[1,2,3,4].forEach( a => console.log(a))


let object = {
    func : () => {
        return this
    }
}

object.func();