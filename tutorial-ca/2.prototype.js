/**
 * prototype
 * function 기계(){ } <<= 옛날 문법
 *
 * Es5 (상속기능 구현)
 * Object.create(prototypeObject);
 * let 부모 = {
 *     name : 'Kim',
 *     age : 50
 * };
 *
 * let 자식 = Object.create(물려받을 부모 object);
 * let 자식 = Object.create(부모); <= prototype 을 부모로 해주세요~ 라고 정의
 * 자식의 age를 바꾸고 싶으면 ?
 * 자식.age = 20; // 이렇게 사용할 수 있다
 * let 손자 = Object.create(자식);
 * // 손자 { }
 * 손자.name
 * => :'kim'
 * 손자.age
 * => 20 => 50
 *
 *
 * 상속기능을 구현하는 ES6 방법
 * Es6 : class
 */

class 부모 {
    constructor(/*여기에다가 파라미터 */) {
        this.name = "kim";
        // 함수를 추가하고 싶으면?
        // 1. constructor 에 추가하든가
        // 1-1 자식이 직접 함수를 가짐

        // this.sayHi = function () {
        //     console.log('hello')
        // }
    }
    // 2. 여기에다가 작성하던가
    // 2-1 여기에 쓰면 오브젝트에 추가 안됨
    // 2-2 부모.prototype에 추가가 된다

    sayHi() {
        console.log('helloooo')
    }

    /**
     * seyHello() { }
     */

}

// 부모.prototype.sayHello = function () { }

let 자식 = new 부모(/* 파라미터는 */);
console.log(자식);
// 자식.__proto__ = 부모.prototype
Object.getPrototypeOf(자식); // 부모님 prototype을 출력해주세요 ~
