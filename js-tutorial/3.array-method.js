// 배열의 함수들
// 배열 자체를 변경하는지, 새로운 배열을 반환하는지

const fruits = ['banana', 'apple', 'orange', 'pea'];

// 특정한 오브젝트가 배열인제 체크
console.log(Array.isArray(fruits)); // 배열이면 true
console.log(Array.isArray({})); // 아니면 false

// 특정한 아이템의 위치를 찾을때
// 아이템이 배열에 몇번째에 있는지 확인하고싶을때  indexOf
console.log(fruits.indexOf('pea'));

// 배열안에 특정한 아이템에 있는지 체크하는 법은
// includes
console.log(fruits.includes('pea')); //배열에 아이템이 있으면 true 없으면 false

// 추가 - 제일 뒤
let length = fruits.push('peach'); // 배열 자체를 수정 또는 업데이트
console.log(fruits);
console.log(length);

// 추가 - 제일 앞에서
// unshift 제일 앞에 추가 할 수있음
length = fruits.unshift('kiwey');
console.log(fruits);


// 제일 뒤에 아이템 제거
// pop 을 사용
let lastItem = fruits.pop();
console.log(fruits);
console.log(lastItem);

// 제일 앞에 아이템 제거
// shift 사용
let lestItem = fruits.shift();
console.log(fruits);
console.log(lastItem);

// 중간에 추가 또는 삭제
// splice 사용
const deleted = fruits.splice(1, 1 );
console.log(fruits); // splice 배열 자체를 수정하고 업데이트 한다.
console.log(deleted);
fruits.splice(1, 1, 'apple', '딸기');
console.log(fruits);

// 잘라진 새로운 배열을 만드는 api
// slice
let newArr = fruits.slice(0, 2);
console.log(newArr);
console.log(fruits);

newArr = fruits.slice(-1);
console.log(newArr);

// 여러개의 배열을 붙여주는 api
// concat 두 배열을 붙여줌
const arr1 = [1,2,3];
const arr2 = [4,5,6];
const arr3 = arr2.concat(arr2);
console.log(arr1);
console.log(arr2);
console.log(arr3);

// 순서를 거꾸로 reverse()
const arr4 = arr3.reverse();
console.log(arr4);
console.clear();

// 중첩 배열을 하나의 배열로 쫙 펴기
// 기본적으로 한단계만 flat 해줌
let arr = [
    [1,2,3],
    [4, [5,6],[7,8]],
];

console.log(arr);
console.log(arr.flat(3));
arr = arr.flat(3);

// 특정한 값으로 배열을 채우기
// fill 배열 자체를 수정
//
arr.fill(0);
console.log(arr);

arr.fill('a', 1,);
console.log(arr);

// 배열을 문자열로 합하기
let text = arr.join();
console.log(text);
text = arr.join(' | ');
console.log(text);