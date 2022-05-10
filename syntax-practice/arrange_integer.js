function makeDescendingOrderInteger(num) {
    let splitArr = (num + '').split('')
    let descendingOrder = splitArr.sort( (a,b)=> b - a)
    let combineElements = descendingOrder.join('');
    let convertToInteger = Number(combineElements);
    return convertToInteger;
}

console.log(makeDescendingOrderInteger(118372));