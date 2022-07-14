// 주어진 배열에서 중복된 값을 제거하라
// 예 [1,1,3,3,0,1,1] => [1,3,0,1]
// 예2 [4,4,4,3,3] => [4,3]

function removeElement(arr) {
    let result = []
    arr.forEach( (value) => {
        if( !result.includes(value)) {
            return result.push(value)
        }
    })
    return result
}


console.log(removeElement([1,1,3,3,0,1,1]));
// removeElement([1,1,3,3,0,1,1]);

// removeElement([4,4,4,3,3])
