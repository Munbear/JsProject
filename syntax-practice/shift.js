function makeShift() {
    const arr = ['apple','kiwi','orange','banana'];
    for(let i=0; i < arr.length; i++){
        if(arr[0] === arr[i]){
            return arr[0]
        }
    }
}

console.log(makeShift()) // shift는 배열의 첫 번재 요소를 지우고 그 요소를 반환한다 .
makeShift()


// let test = ['apple','kiwi'];
// console.log(test.shift())
// console.log(test)
