// [ 소수 찾기 ]
// 1 부터 n 사이의 소수의 개수를 반환 하는 함수를 작성하시오

function findPrimeNum(n) {
    // set은 데이터의 집합체 중복X
    // set의 prototype = has/add/delete ...
    const primeNum = new Set()
    for(let i=3 ; i <= n; i +=2 ) {
        primeNum.add(i);
    }
    primeNum.add(2);
    for (let j=3; j ** 2 < n; j++){
        if(primeNum.has(j)){
            for(let k =j ** 2; k <= n; k+=j){
                primeNum.delete(k)
            }
        }
    }
    return primeNum.size;
}

console.log(findPrimeNum(10))
console.log(findPrimeNum(5));