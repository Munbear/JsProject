// Set
const set = new Set([1,2,3]) /// set 만드는법
console.log(set);

// 사이즈 확인
console.log(set.size);

// 존재하는지 확인
console.log(set.has(2));

// 순회
set.forEach((item)=> console.log(item));
for(const value of set.values()) {
    console.log(value);
}

// 추가 중복 안됨
set.add(6)
console.log(set);

set.delete(6);
console.log(set);

// 전부 삭제

set.clear()
console.log(set);

// 오브젝트
const obj1 = {name:'apple', price: 8};
const obj2 = {name:'orange', price: 2};
const objs = new Set([obj1, obj2]);

// 퀴즈 // 카피가능
obj1.price =10;
objs.add(obj1);
console.log(objs);


// 퀴즈
const obj3 = {
    name:'banana',
    price: 5,
};
objs.add(obj3);
console.log(objs);