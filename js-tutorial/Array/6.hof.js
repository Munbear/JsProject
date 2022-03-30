const fruits =  ['🍌', '🍓', '🍇', '🍓'];
for(let i=0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
// 배열을 빙글 빙글 돌면서 원하는것을 할때 forEach를 사용
fruits.forEach((function (value) {
    console.log(value);
}));

fruits.forEach((value)=> console.log(value));

// 조건에 맞는(콜백함수) 아이템을 찾을때 사용할 수 있다

const item1 = {name: '🥛', price: 2};
const item2 = {name: '🍪', price: 3};
const item3 = {name: '🍙', price: 1};
const products = [item1, item2, item3, item2];
let result = products.find((value) => {
    return value.name === '🍪';
}); // 이 함수 경우에는 중괄호 생략 가능
console.log(result);

// findIndex: 제일 먼저 조건에 맞는 아이템의 인덱스를 반환
result = products.findIndex((value) => {
    return value.name === '🍪';
});
console.log(result);

// 배열의 아이템들이 부분적으로 조건(콜백함수)에 맞는지 확인
result = products.some((item) => {
    return item.name === '🍪';
});
console.log(result);

//배열의 아이템들이 전부 조건(콜백함수)에 맞는지 확인
result = products.every((item) => {
    return item.name === '🍪';
});
console.log(result);

// 조건에 맞는 모든 아이템들을 새로운 배열로 만듬
result = products.filter((item) => {
    return item.name === '🍪';
});
console.log(result);

console.clear();

// Map 배열의 아이템들을 각각 다른 아이템으로 매핑할 수 있는, 변환해서
const nums = [1,2,3,4,5];
result =nums.map((item)=> item * 2);
console.log(result);

result =nums.map((item)=> {
    if(item % 2 === 0) {
        return item * 2
    } else {
        return  item;
    }
});
console.log(result);


// Flatmap: 중
result =nums.map((item) => [1,2]);
console.log(result);

result =nums.flatMap((item) => [1,2]);
console.log(result);

result = ['dream', 'coding'].flatMap(text => text.split(''));
console.log(result);


// sort 배열의 아이템들을 정렬
// 문자열 형태의 오름차순으로 요소를 정렬하고, 기존의 배열을 변경
const texts = ['hi', 'adf'];
texts.sort();
console.log(texts);

const numbers = [0,5,4,2,1,10];
numbers.sort();
console.log(numbers);

// < 0 a 가 앞으로 정렬, 오름차순
// > 0 b 가 앞으로 정렬, 내림차순
numbers.sort((a,b) => a -b);
console.log(numbers);

// reduce 배열의 요소들을 접어서 값을 하나로
result = [1,2,3,4,5].reduce((sum, value) => (sum += value), 0);
console.log(result);







