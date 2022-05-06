class 할아버지 {
    constructor(name) {
        this.성 = "kim";
        this.이름 = name;
    }
    sayHi() {
        console.log('허허 나는 할아버지야')
    }
}

class 아버지 extends 할아버지 {
    constructor(name) {
        super(name) // super() 라는 이상한 함수는 extends로 상속중인 부모 class의
        // constructor() 를 의미한다.
        // 쉽게 말하면 할아버지 class의 constructor() 이거랑 똑같다는 의미다
        this.나이 =  60;
    }
    sayHi2() {
        // 부모가 가지고 있는 함수를 가져다 사용하고 싶으면 super를 사용해서 가져 올 수 있다
        console.log('하하 나는 아버지')
        super.sayHi();
    }
}

// 1. super를 constructor 안에서 쓰면 부모 class의 constructor
// 2. super 를 prototype 함수 안에서 사용하면 부모 class의 prototype 입니다.
/// 2번은 참고로만 알아두자
ㄴ
let test = new 아버지('민수');
let test2 = new 할아버지('예수');
test.sayHi()
test.sayHi2()
console.log(test);
console.log(test2);

