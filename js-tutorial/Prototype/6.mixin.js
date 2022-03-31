/**
 * 오브젝트는 단 하난의 프로토타입을 가리킬 수 있다(부모는 단 하나!)
 * 여러개이 함수들을 상속하고 싶으면
 * Mixin 이라는 것을 사용하면 된다 (mixin = 섞는다)
 */

const play = {
    play: function () {
        console.log(`${this.name} 놀아요!`);
    },
};

const sleep = {
    sleep: function () {
        console.log(`${this.name} 자요!` );
    },
};

function Dog(name){
    this.name = name
}

Object.assign(Dog.prototype, play, sleep);
const dog = new Dog('멍멍');
console.log(dog);
dog.play();
dog.sleep();

class Animal {}
class Tiger extends Animal {
    constructor(name) {
        super()
        this.name = name;
    }
}





