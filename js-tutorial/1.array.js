// 배열 생성 법
let array = new Array(3,3,4);
console.log(array);

array = new Array(1,2,3);
console.log(array);

array = Array.of(1,2,3,5,6);
console.log(array);

const anotherArray = [1,2,3,5,7,6];
console.log(anotherArray);
array = Array.from('text'); // 캐릭터 하나하나 씩 배열로 만들어줌
console.log(array);

// 일반적으로 배열은 동일한 메모리 크기를 가지며, 연속적으로 이어져 있어야 함
// 하지만 자바스크리브에서의 배열은 연속적으로 이어져 있고
// 오브젝트와 유사함!
// 자바스크립트의 배열은 일반적인 배열의 동작을 흉내낸 튻한 객체이다.
// 이걸 보완하기 위해서 타입이 정해져 있는 타입 배열이 있음 (Typed collections)
array =Array.from({
    0: '안',
    1: '녕',
    2:'tlq',
    length: 3,
});
console.log(array);

