function add(a,b) {
    return a + b;
}
const sum = add;

// 같은 값이 나옴
console.log(add(1,2));
console.log(sum(1,2));
