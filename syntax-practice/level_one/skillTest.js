// 주어진 배열에서 중복된 값을 제거하라
// 예 [1,1,3,3,0,1,1] => [1,3,0,1]
// 예2 [4,4,4,3,3] => [4,3]

/**
 * 배열에서 다음 인덱스 값이 같으면 빈 배열에 값을 추가 한다.
 * 문제1: 중복된 모든 값이 지워짐 => [1,3,0]
 *  원하는 값은 [1,3,0,1] 뒤에 있는 중복 값도 나와야 함
 * **/

function removeElement(arr) {
    // return arr.filter( (e,i) => arr[i+1] !== e)
    arr.filter( (e,i) => {
        console.log(arr[i+1])
    })
}


// console.log(removeElement([1,1,3,3,0,1,1]));
// removeElement([1,1,3,3,0,1,1]);

// console.log(removeElement([4,4,4,3,3]))
