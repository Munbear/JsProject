function makeSplice(item1,item2,...item3) {
    let arr = [1,2,3,4,5,6,7,8,9];
    delete arr[item2]
    let addArr = item3
    let result = arr[item2] = [...addArr]
    return result
}

console.log(makeSplice(1,2,10,20));
// console.log(makeSplice(1,3,8,9));

// const newArr = [1,2,3,4,5,6,7,8,9];
// let result = newArr.splice(1,2,10,20);
// console.log('반환 값:',result);
// console.log('바뀐 array:',newArr);

// let array = [1,2,3,4,5,6];
// delete array[1];
// console.log(array);

