// 문제 1.
console.log('------------------------여기서부터 문제 1-------------------------');
class Puppy {
    constructor(type,color) {
        this.type = type;
        this.color = color;
    }
    getAge(){
        // instanceof 는 a instanceof b 이렇게 사용하면 a 가 b로부터 생성된 오브젝트인지 아닌지를
        // true/false로 알려주는 연산자 이다.
        if( this instanceof Kitty) {
            console.log(this.age++)
        } else {
            console.log('error');
        }
    }
}

class Kitty extends Puppy {
    constructor(type,color,old) {
        super(type,color);
        this.age = old;
    }
    getAge() {
        this.age ++
    }
}

let martise = new Puppy('말티즈','white');
let jindo = new Puppy('진돗개','brown');
let coshort = new Kitty('코숏','white',5);
let russianblue = new Kitty('러시안블루','gary',1);
console.log(martise)
console.log(jindo)
console.log(coshort)
console.log(russianblue)
martise.getAge();
jindo.getAge();




// 문제 2
class Unit {
    constructor() {
        this.power = 5;
        this.strenght = 100;
    }
    get battlePoint() {
        return this.power + this.strenght;
    }
    set heal(hp) {
        return this.strenght = this.strenght + hp;
    }
}

console.log('----------밑에서부터 문제 2----------------');
let unitA = new Unit();
let unitB = new Unit();

console.log(unitA);
console.log(unitB);
console.log('unitA의 총 능력치는 : ',unitA.battlePoint);
console.log('unitB의 총 능력치는 : ',unitB.battlePoint);
unitA.heal = 50;
unitB.heal = 30;
console.log(unitA)
console.log(unitB)
console.log('unit의 총 능력치는 : ',unitA.battlePoint);
console.log('unit의 총 능력치는 : ',unitB.battlePoint)
// 문제3.
console.log('-------------------------밑에서부터 문제3 ------------------------------');
let quizData = {
    odd : [],
    even : [],
    setterFunc : function(...nums){
        nums.forEach( (a) => {
            if( a % 2 == 1){
                console.log(this.odd.push(a)) // 짝수일때
            } else {
                console.log(this.even.push(a)) // 홀수일때
            }
        });
    },
    get getterFunc() {
      return [...this.odd, ...this.even].sort()
    }
};


quizData.setterFunc(1,2,3,4,5,6);
console.log(quizData.getterFunc);
