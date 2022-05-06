/**
 * prototype 은 비유하자면 유전자라고 할 수 있다
 * prototype 에 값을 추가해주면 모든 자식들은 prototype 에 추가된 값을 물려 받을 수 있다다
 * prototype 은 함수에만 몰래 생성된다
 * 부모의 prototype을 검사하고 싶으면 __proto__ 사용하면 된다.
 */

function 기계(이름) {
    this.name = 이름;
    this.age = function() {
        console.log('안녕하세요' + this.name + '입니다.')
    }
}

기계.prototype.gender = '남';

let 학생1 = new 기계('Park');
let 학생2 = new 기계('Kim');


console.log(학생1.gender)

// let arr = [1,2,3];
// let arr = new Array(1,2,3)


console.clear();

let 부모 = { name : 'kim'};
let 자식 = {};
자식.__proto__ = 부모;
console.log(자식.name);
