const fruits = ['banana', 'apple', 'orange', 'pea'];

// 배열 아이템을 참조하는 방법
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits.length); // length 사용하면 배열에 몇개의 아이템이 들어있는지 확인 할 수있다.

for (let i =0; i < fruits.length; i++){
    console.log(fruits[i]);
}


// const fruits = ['banana', 'apple', 'orange', 'pea'];
// 추가, 삭제 - 좋지 않은 방식

fruits[6] = '딸기';
console.log(fruits);

delete fruits[1];
console.log(fruits);



