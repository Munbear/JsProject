/**
 * 매핑을 할 수 있는 Map자료형
 * object 자료형과 똑같이 key, value형태로 자료를 저장할 수 있는 자료형이다.
 *
 */

// 매핑을 할 수 있는 Map 자료형 만드는 법
let person = new Map();
person.set('name', 'kim');
person.set('age',20);
/*
출력을 해보면 object와 약간 다르다
{'naem' => 'Kim', 'age' => 20} 이런식으로 출력이 됩니다.
화살표의 처럼 나오는 이유는 자료들 간의 연관성을 표현하기 위해서 이다.
자료들간이 연관성을 표현하기 위해 쓰는 자료형이 Map 자료형 이다.

Map 자료형은 key, value값에 모든 자료를 집어넣을 수 있다.
즉 key 값란에 별걸 다 집어넣을 수 있다는 것이다.
*/

let person2 = new Map();
person2.set([1,2,3], 'bak');
person2.set('age', 24);

// Map 다루는 법

let person3 = new Map();
person3.set('age',23);

person3.get('age'); // 자료 꺼내는 법
person3.delete('age'); // 자료 삭제하는 법
person3.size; // 자료 몇갠지 알려줌

// Map 자료형 반복문 돌리기
for(let key of person3.keys() ) {
    console.log(key);
}


// 자료를 직접 집어넣고 싶으면
let person4 = new Map([
    ['age',20],
    ['name' ,'kim']
]);

let array = [1,5,34,64,23,5,632,9];
// 자료양이 방대하면 거기서 원하는 값 찾을 일이 있으면 Hash Table을 사용합니다.
// 자료에 key 값을 부여하고 정렬하면 그게 Hash Table 만들기 끝이다.

/**
 * Hash Table을 만들기 위해선 쌩 자바스크립트 object 자료를 쓰면 되긴 하지만
 * 1. object 자료형은 hasOwnProperty.toString 이런 키들도 집어넣을 수 있어서 너무 유연함
 * 2. key 값으로 들어올 수 있는게 문자혙애로 제한되있어서 Map 자료형을 사용한다.
 * 그냥  new Map() 사용하면 끝이다.
 */

/**
 * Set 자료형 다루기
 */

let rollBook = new Set(['john', 'tom', 'andy', 'tom']);

rollBook.add('dally'); // 자료더하기
rollBook.has('tom'); // 자료 삭제하기
rollBook.size; // 자료 몇갠지 세기


/*
반복문도 가능하다 forEach 혹은 for of 반복문을 사용한다.
Set 은 Map보다 많이 사용한다.
특히 Array의 데이터 중복제거할 대 많이 사용한다
왜냐면 Array를 Set으로 바꾸는게 매우 쉽기 때문이다.
 */

// Array에 있는 중복데이터 제거해보기

let rollBook2 = [ 'john', 'tam', 'andy', 'tam'];

let rollBook3 = new Set(rollBook2); // Array를 Set으로 바꾸기

rollbook2 = [...rollBook3] // Set을 Array로 바꾸기
// 이러한 패턴으로 많이 한다.
// 위의 예제는 rollbook2 라는 Array 자료형을 Set으로 바꿨다가 다시 Array로 바꾸는 에제이다.
// 그럼 이제 rollbook2 에 있는 중복자료들이 자동으로 제거가 된다.






//


