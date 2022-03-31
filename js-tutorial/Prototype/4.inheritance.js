// 프로토타입을 베이스로한 객체지향 프로그래밍

function Animal(name, emoji) {
    this.name = name;
    this.emoji = emoji;
}

Animal.prototype.printName = function () {
    console.log(`${this.name} ${this.emoji}`);
}



function Dog(name, emoji, owner) {
    Animal.call(this, name, emoji);
    this.owner = owner;
}
Dog.prototype = Object.create(Animal.prototype)

Dog.prototype.play = () => {
    console.log('lets playing together!');
}

function Tiger (name, emoji) {
    Anumal.call(this, name, emoji);
}

Tiger.prototype
let dog1 = new Dog('멍멍', 'rodlalwl','주인이름' );
dog1.play();

/**
 * instanceof 사용하면 어떠한 객체가 어떠한 인스턴스를, 생성자함수를 사용하는지 알수 있다
 * 어떤 프로토타입을 사용하는지 알 수 있다.
 *
 */


