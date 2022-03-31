const dog = {
    name: 'dd',
    emoji: 'dddd'
};

console.log(Object.keys(dog))
console.log(Object.values(dog))
console.log(Object.entries(dog))

console.log('name' in dog);
console.log(dog.hasOwnProperty('name'));

// 오브젝트의 각각의 프로퍼티는 프로퍼티 디스크립터라고 하는 객체로 저장도미

const des = Object.getOwnPropertyDescriptors(dog);
console.log(des);

const desc = Object.getOwnPropertyDescriptor(dog, 'name');
console.log(desc);

Object.defineProperty(dog, 'name', {
    value: 'adjajd',
    writable: false,
    enumerable: false,
})

console.log(dog.name);

console.log(Object.entries(dog));
