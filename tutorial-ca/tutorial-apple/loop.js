/**
 * 반복문 용도
 * 1. 코드 단순 반복
 * 2. 자료형에 담긴 자료들을 하나씩 꺼내고 싶을때
 *
 */

/**
 * for in 반복문은 object에 사용한다
 * object 자료형에 저장된 자료들을 하나씩 꺼내고 싶을 때 사용합니다.
 */

let obj = {
    name : 'Park',
    age : 25,
}

for (let i in obj) {
    console.log(obj[i]);
}

// 특징 1. enuerable한 것만 출력해준다.
// enumerable : 셀수있는

console.log(Object.getOwnPropertyDescriptors(obj, 'name'));

// for in 반복문 특징 2. 부모의 prototype에 저장된 것도 출력해준다.
// 오브젝트의 부모의 유전자에 있는 속성도 반복문으로 출력해준다.

console.log('---------------------for in Loop--------------------');
class 부모 {

}
부모.prototype.name = "Park";
let 오브젝트 = new 부모();
for(let key in 오브젝트) {
    if(오브젝트.hasOwnProperty([key])) {
        console.log(오브젝트[key]);
    }
};


/**
 * for of 반복문
 *
 */

console.log('-------------for of Loop ---------------------------');
let arr = [2,3,4,5];
console.log(arr[Symbol.iterator]());
console.log()
for(let 자료 of arr) {
    console.log(자료);
}


console.log('-------------------1.quiz----------------');
// Q.1 for of 반복문을 이용해서 2단부터 9단까지의 구구단을 콘솔창에 출력해봐라
let data = [2,3,4,5,6,7,8,9]
for(let mpc of data){
    console.log(mpc+'단');
    for(let i=1; i < 10; i++){
        console.log(mpc + "x" + i + '=' + (mpc * i))
    }

}


console.log('-----------------2.quiz-------------------');
let products = [
    {
        name1: 'chair',
        price1: 7000,
    },
    {
        name2: 'sofa',
        price2: 5000,
    },
    {
        name3: 'desk',
        price3: 9000,
    },
];
