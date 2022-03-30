// spread 연산자, 전개구문
// 모든 이터레이블은 Spread가 될 수 있다.
// 순회가 가능한 모든 것들은 촤르륽 펼쳐 질 수 있다.
// func(...iterable)
// [...iterable]
// {...obj}
// ecamScript 2018

function add(a,b,c,) {
    return a + b + c;
}

const nums = [1,2,3] // nums 라는 베열을 add에 전달하는 법은 ?
console.log(add(...nums)); // 이렇게 하면됨

//Rest parameters
function sum(first, second, ...nums){
    console.log(nums);
}
sum(1,2,0,1,2,4);

// Array Concat
const fruits1 = ['apple', 'kiwi'];
const fruits2 = ['pea', 'banana'];
let arr = fruits1.concat(fruits2);
console.log(arr);
arr = [...fruits1, 'Mango', ...fruits2];
console.log(arr);


// Object
const bear = {name: 'Bear', age: 222,  home: {adrees: 'home'}};
const updated ={
    ...bear,
    
    job: 's/w enudkf',
};
console.log(updated);