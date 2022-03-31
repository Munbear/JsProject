function Dog(name, emojl) {
    this.name = name;
    this.emoji = emoji;
    // 인스턴스 레벨의 함수
    // this.printName = () => {
    //     console.log(`${this.name} ${this.emoji}`);
    // }
}

// 프로토타입 레벨의 함수

// 조금더 메모리를 절약 할 수 있음
Dog.prototype.printName = function() {
    console.log(`${this.name} ${this.emoji}`)
}

const dog1 = new Dog('뭉치', "개");
const dog2 = new Dog('백구', '강아지');
console.log(dog1, dog2);
dog1.printName();
dog2.printName();

//오버라이딩
// 인스턴스 레벨에서 동일한 이름으로 함수를 재정의 하면 오버리이딩 하면
// 프로토타입 제벨의 함수으; 프로퍼티는 가려진다. 새도잉 됨

/**
 * 
 */