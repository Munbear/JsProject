/**
 * constructor, prototype 연습문제
 */

// Q. 오브젝트 자료 여러개를 만들고 싶습니다.
/*
let 학생1 = { name : "Kim", age : 20}
let 학생2 = { name : "Park", age : 21}
let 학생3 = { name : "Lee", age : 22}
 */
// constructor 문법을 사용해서 위의 오브젝트와 똑같은 오브젝트 3개를 한번 뽑아보아라
// 학생1.sayHi() 라고 사용하면 " 안녕 나는 kim이야" 라는 글자가 콘솔창에 나오도록 sayHi() 함수도
// constructor 안에 추가해 보세요

function Student(parameter1, parameter2) {
    this.name = parameter1;
    this.age = parameter2;
    this.sayHi = function() {
        console.log(`안녕 나는 ${this.name} 이야`);
    }
}

let 학생1 = new Student('Kim',20);
let 학생2 = new Student('Park',21);
let 학생3 = new Student('Lee',22);
학생3.sayHi();




// Q. 다음 코드의 출력 결과는 무엇인가요?
/*
function Parent() {
    this.name = "Kim";
}
let = a new Parent();
a.__proto__.name = "Park"
console.log(a.name);

출력 결과 : Kim

let a = new Parent(); 이 부분에서 a = {name :  "Kim"} 이 되고
a.__proto__.name = 'Park'; 이건 보모의 prototype에 park을 추가하라는 뜻이기때문에
a.name 이라고 사용했을 대
내가 직접 가지고 있는 {name : 'Kim"} 이걸 우선 출력해준다

 */




/*
위에 0번 문제에서 Student라는 부모에 sayHi라는 함수를 하나 추가하라고 했죠?
그래서 sayHi()라고 사용하면 "안녕 나는 ~~이야" 라고 내 이름을 출력해주는 함수를 prototype에 추가했습니다.
하단처럼 만들었는데 의도한 대로 이름이 출력되지 않고 있습니다.
원인은 무엇일까요?

function Student(parameter1, parameter2) {
    this.name = parameter1;
    this.age = parameter2;
}

Student.prototype.sayHi = () => {
    console.log(`안녕 나는 ${this.name} 이야`);
}

let 학생1 = new Student('Kim', 20);

학생1.sayHi(); // 왜 코드가 제대로 안나올까요 ?

답:
위의 코드는 sayHi()함수가 arrow function으로 만들어 져있다 arrow function안에서 this바인딩과
일반 function 안에서의 this 바인딩은 다른 목적성을 가지고 있기 때문에 코드가 원하는 대로 실행되지 않았던
것이다. arrow function 안에서의 this는 arrow functino 밖에 있는 this를 그대로 사용 하기 때문에
arrow function 안에서 사용한 this는 window를 가르키게 됩니다. 때문에 this가 원하는 방향대로 동작하지 않았다


 */


/*
모든 array에 적용할 수 있는 함수를 직접 새로 만들려면 어떻게 해야될까요?
- 모든 array에 붙일 수 있는 array 내의 있는 3이라는 값을 제거해주는 유용한 함수를 하나 있다
- remove3() 함수는 어떻게, 어디에 만들어야 모든 array에 쓸 수 있을 까요?

let arr = [1,2,3];
arr.remove3();
console.log(arr) // [1,2]

Array().prototype.remove3()

ex)
Array.prototype.remove3 = functino() {
    this 에서 3을 찾아서 제거해주세요
}

 */