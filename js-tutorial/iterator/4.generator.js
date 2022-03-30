// // [Spmbol.iterator](): IterableIterator<T>;
// // 0 부터 10이하까지 숫자의 2배를 순회하는 이터레이터(반복자) 만들기
//
// const multiple = {
//     [Symbol.iterator]: () => {
//         const max = 10;
//         let num = 0
//         return {
//             next() {
//                 return {
//                     value: num++ * 2,
//                     done: num > max};
//             }
//         }
//     }
// }
//
// for (const num of multiple) {
//     console.log(num);
// }

// 제너레이터 만드는 법 // 제너레이터는 이터러블의 간편 사용방법이다.
function* multipleGenerator() {
    try{
        for(let i=0; i <10; i++){
            console.log(i);
            yield i ** 2;
        }
    } catch (error){
        console.log('Error');
    }

}
const multiple = multipleGenerator();
let next = multiple.next();
console.log(next.value, next.done);

// multiple.return();
multiple.throw('Error');

next = multiple.next();
console.log(next.value, next.done);
