//  [ 자릿수 더하기 ]

function getSumNumber(n) {
    let arr = n.toString().split('').map( x => Number(x));
    return arr.reduce( (a,b) => a+b);
}


console.log(getSumNumber(123));
console.log(getSumNumber(987));