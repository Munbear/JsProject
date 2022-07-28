// [ 평균 구하기 ]

function getAverage(arr) {
    return arr.reduce( (a,b) =>  a + b) / arr.length
}

console.log(getAverage([1,2,3,4]));
console.log(getAverage([5,5]));

function myFun(array) {
    let result = 0;
    for(let i=0; i < array.length; i++){
        result += array[i];
    }
    return result / array.length
}

console.log(myFun([1,2,3,4,5,6,7,8,9,10]));
console.log(myFun([10,11,12,13,14,15,16,17,18,19,20]));