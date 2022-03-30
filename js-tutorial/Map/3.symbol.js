// Symbol 타입
//  유일한 키를생성할 수 있음
const map = new Map();
// const key1 = 'key';
// const key2 = 'key';
const key1 = Symbol('key'); // 이름은 같아도 값은 다르다
const key2 = Symbol('key'); // ;;
map.set(key1, 'hello');
console.log(map.get(key2));
console.log(key1 === key2);


// 동일한 이름으로 하나의 키를 사용하고 싶다면 Symbol.for 이다
// 전역 심벌 레지스트리 (Global Symbol Registry)
const k1 = Symbol.for('key');
const k2 = Symbol.for('key');
console.log(k1 === k2); // 같은 값이라고 나옴

console.log(Symbol.keyFor(k1));

// 심볼은 맵에서 유용하게 사용할 수 있다
//// 오브젝트에서도 심볼을 사용할 수 있다

const obj = {}
