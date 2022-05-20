function makeConcat(...item) {
    let arr = [1,2];
    return[...arr, ...item];
}

console.log(makeConcat(3))