// Iterable 하다는건 순회가 가능하다는 거
// [Symbol.iterator](): IterableIterator<T>;
// 심볼정의를 가진 객체나, 특정한 함수가 IterableIterator<T>를 리턴한다는것은
// 순회 가능한 객체이다 라는것을 의미한다.
// 순회가 가능하면 무엇을 할 수 있나?
// 바로 빙글 빙글 도는 방복문, 연산자들을 사용할 수 있다

const array = [1,2,3];
console.log(array.values());
console.log(array.entries());
console.log(array.keys());

// iterator 사용해 보기
const iterator = array.values();
while (true) {
    const item = iterator.next();
    if(item.done) break;
    console.log(item.value)

    for(let item of array.values()) {
        console.log(item);
    }

}

// 일반 오브젝트는 이터러블 하지 않음
// 대신에 for in 라는 연산자를 이용해 키를 하나하나식 받아(순회)올 수 있다
const obj = {id:123, name:'bear'};
for(const key in obj) {
    console.log(key)
}
