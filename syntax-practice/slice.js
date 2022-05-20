function makeSlice(item1, item2) {
    let array = [
        'apple',
        'kiwi',
        'orange',
        'pineapple',
        'melon',
        'banana',
        'strawberry'
    ];
    let testing = array.filter(array => array.length > item1 && array[item2]);
    console.log('필터',testing);
    for(let i=0; i < array.length ; i++){
        console.log(array[i])
    }
}

makeSlice(1,4)
// console.log(makeSlice())

// 0, 1 ,2, 3



let array = ['apple','kiwi','orange','pineapple','melon','banana','strawberry'];
console.log('내장함수 동작:',array.slice(1,4));

// let arr = ['apple','kiwi','orange','pineapple','watermelon','melon'];
// console.log(arr.slice(3,6));
// 첫 번재 인수는 복사를 시작할 인수이다. 음수인 경우 배열의 끝내서 시작함
// 복사를 종료할 인데스 이 인덱승 해당한느 요소는 복사도지 않음 생략 가능하며 기본값은 length프로퍼티 값이다.

