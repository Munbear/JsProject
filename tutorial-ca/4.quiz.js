class Puppy {
    constructor(type,color) {
        this.type = type;
        this.color = color;
    }
    getAge(){
        // instanceof 는 a instanceof b 이렇게 사용하면 a 가 b로부터 생성된 오브젝트인지 아닌지를
        // true/false로 알려주는 연산자 이다.
        if( this instanceof Kitty) {
            this.age++
        }
    }
}

class Kitty extends Puppy {
    constructor(type,color,old) {
        super(type,color);
        this.age = old;
    }
    getAge() {
        super.getAge();
    }
}

let martise = new Puppy('말티즈','white');
let jindo = new Puppy('진돗개','brown');
let coshort = new Kitty('코숏','white',5);
let russianblue = new Kitty('러시안블루','gary',1);


console.log(martise)
console.log(jindo);
console.log(coshort);
console.log(russianblue);


class Unit {
    constructor() {
        this.power = 5;
        this.strenght = 100;
    }
    get battlePoint() {
        return this.power + this.strenght;
    }
    set heal(hp) {
        this.strenght = this.strenght + hp;
    }
}

let unitA = new Unit();
let unitB = new Unit();

console.log(unitA);
console.log(unitB);
console.log(unitA.battlePoint);
console.log(unitB.battlePoint);
unitA.heal = 50;
////////////////////////
let data = {
    odd: [],
    even: [],
}

