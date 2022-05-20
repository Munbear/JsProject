function arrayPush(...item) {
    let myArr = [1,2];
    let newArr = [...myArr, ...item];
    return newArr;
}

console.log(arrayPush(3, 4, 5));
