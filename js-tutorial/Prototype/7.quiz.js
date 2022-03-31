// 클래스를 베이스로한 객체지향프로그래밍

class Animal {
    constructor(name, emoji) {
        this.name =name;
        this.emoji = emoji;
    }
    printName() {
        console.log(`${this.name} ${this.emoji}`);
    }
}

class Dog extends Animal {
    play() {
        console.log('같이 놀자용!')
    }
}

class Tiger extends Animal {
    hunt() {
        console.log(`사냥 ㄱㄱ`);
    }
}

const dog = new Dog('뭉치', '개이모지');
const tiger = new Tiger('허응', '호랭이 이모지');
dog.printName();
tiger.printName();
dog.play();
tiger.hunt();
