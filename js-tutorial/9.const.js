// let 재할당이 가능
let a = 1;
a= 2;

// const 재할당이 불가능
// 1. 상수
// 2. 상수변수 또는 변수

const text = 'hello'
// text = 'h1'; 이렇게 하면 안됨

//1. 상수
const MAX_FRUITS = 5 // 상수를 선언할때는 대문자로, 단어 사이에 언더바
// 2. 재할당 불가능한 상수변수 또는 변수
const apple = {
    name: 'apple',
    color: 'red',
    display: '🍎'
}

// apple = {};
console.log(apple);
apple.name = 'orange';
apple.display = '🍏';
console.log(apple);

// const 키워드는 재할당만 불가능하다 변견은 가능하다
// let은 재할당과 값 변경 둘다 가능하다



