function makeUnshift(...item) {
    const arr = [3,4];
    let result = [...item, ...arr];
    return result
}


console.log(makeUnshift());