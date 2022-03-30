/**
 * Map 은 키와 값으로 된 자료이다
 * 순서는 중요하지 않음
 * 맵에서는 유일한 키를 가지고 있음
 * 키만 다르면 중복이 가능함
 * 맵은 오브젝트와 비슷하게 사용할 수 있다.
 */


// Map 만드는 법
const map = new Map([
    ['key1', 'apple'],
    ['key2', 'banana'],
]);
console.log(map);

// 사이즈 확인
console.log(map.size);
// 존재하는지 확인
console.log(map.has('key1')); // 키가 존재하면 true
console.log(map.has('key4')); // 존재 하지 않으면 false
// 순회
map.forEach((value, key) => console.log(key, value));
console.log(map.keys());
console.log(map.values());
console.log(map.entries());
// 찾기
console.log(map.get('key1'));
console.log(map.get('key2'));
console.log(map.get('key4'));
// 추가
map.set('key3', 'kiwi');
console.log(map);

//삭제
map.delete('key3');
console.log(map);
//전부삭제
map.clear();
console.log(map);

// 오브젝트와 차이점은?
// 사용할 수 있는 함수가 다름
// 오브젝트에서는 키를 동적으로 접근이 가능한데
// map은 이렇게 접근이 불가능하다
// map은 get을 이용해 접근 해야 된다.

