// 함수를 만들어 object 데이터를 다루는 이유
// 1. object 자료가 복잡할 때 이득
// 2.  object 자료 수정시 편리
/**
 * set / get 키워드 특징
 * set은 데이터 변경
 *  - set함수들 (setter)
 *  - 파라미터가 1개 있어야합니다.
 *
 * get은 데이터 꺼내쓰는 함수
 *  - return이 있어야합니다.
 *
 *
 * 데이터 출력/수정 함수를 만들어 쓰는 이유는?
 * 
 *
 */


/*
class 에서 사용하는 get/set
prototype 함수들에도 get/set 가능

* */
class 사람 {
    constructor() {
        this.name = 'Park';
        this.age = 20;
    }
    get nextAge() {
        return this.age + 1
    }
    set setAge(나이){
         this.age = 나이;
    }
}

let 사람1 = new 사람();


console.log(사람1.nextAge)
console.log(사람1.setAge = 200)
console.log(사람1);


// let person = {
//     name : 'Park',
//     age : 25,
//     get nextAge() {
//         return this.age + 1
//     },
//     setAge(나이){
//         this.age = parseInt(나이)
//     }
// }
//
// person.setAge = '20';
// person.nextAge;

