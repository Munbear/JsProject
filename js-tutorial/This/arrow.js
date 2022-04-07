// 함수처럼 사용가능하고 생성자 함수로도 사용가능하다 (클래스)
// 이러한 기능을 사용하기 위해서 불필요한 프로토타입(많은 데이터를 담고 있는 객체)이 생성됨

const dog = {
    name:'Dog',
    play: () =>  {
        // 이렇게 사용하는거는 별로 좋지 못함
        console.log('playing');
    },
};
dog.play();

/// 일반 생성자 함숴럼 사용도 가능하다
// const obj = new dog.play();
// console.log(obj);

// ES6
const cat = {
    name:'cat',
    play() { // 객체의 메서드 (오브젝트에 속한 함수이다.)
        console.log('meow')
    }
}
cat.play();
// const obj1 = new cat.play(); // 생성자 함수로 사용할 수 없음

/**
 * 화살표 함수의 특징은
 * 1. 문법이 깔끔하다
 * 2. 생성자 함수로 사용이 불가능하다( 무거운 프로토타입을 만들지 않는다)
 * 3. 함수 자체 arguments 가지고 있지 않다
 * 3. this에 대한 바인딩이 정적으로 결정된다.
 *      - 함수에서 제일 근접한 상위 스코프의 this에 정적으로 바인딩됨
 */

function sum(a,b) {
    console.log(arguments);
}
sum(1,2);

const add = () => {
    console.log(arguments);
};
add(1,2);

const printArrow = () => {
    console.log(this)
}
printArrow();
cat.printArrow = printArrow;
cat.printArrow();

