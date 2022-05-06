/**
 * primitive data type
 * reference data type
 */

let 변수 = '1234'; // primitive data type
let arr = [1,2,3,4]; // Array, Object는 변수에 값이 저장이 되지 않는다.
// reference data type 이라고 한다.


let name1 = { name: 'kim'};
function change(obj) {
    obj = {name: 'park'}
}

change(name1);
console.clear();

/**
 * constructor
 * - object를 막 복사하고 싶을 때 사용합니다.
 * - 비슷한 obj를 여러개 만들때 constructor 문법이 용이 하다.
 *
 * 비슷한 학생 object를 여러개 만들려면
 *  constructor 라는 object 생성 기계를 만드세요
 */

// 학생 출석부를 만들어보자
// this라는 키워드는 새로생성되는  object를 뜻한다.
// this : 기계(constructor)에서 새로 생성되는 object = instance


// let 학생1 = {
//     name : 'kim',
//     age : 15,
//     sayHi() {
//         console.log('안녕하세요' + this.name + '입니다.')
//     }
// }
// 학생1.sayHi();


function Student(parameter1,parameter2) {
    this.name = parameter1;
    this.age = parameter2;
    this.sayHi = function() {
        console.log('안녕하세요' + this.name + '입니다.')
    }
}



let student1 = new Student('park',18);
let student2 = new Student('kim',17);

student1.sayHi()
student2.sayHi()
console.log(student1)
console.log(student2)

console.clear();

function Products(parameter1,parameter2) {
    this.name = parameter1;
    this.price = parameter2;
    this.부가세 = function () {
        console.log('부과세금액은 : ' + this.price * 0.1)
    }
}

let products1 = new Products('shirts',50000);
let products2 = new Products('pants', 60000);

console.log(products1)
console.log(products2)
products1.부가세()
products2.부가세()