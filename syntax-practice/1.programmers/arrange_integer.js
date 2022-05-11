function makeDescendingOrderInteger(num) {
    let splitArr = (num + '').split('')
    let descendingOrder = splitArr.sort( (a,b)=> b - a)
    let combineElements = descendingOrder.join('');
    let convertToInteger = Number(combineElements);
    return convertToInteger;
}

console.log(makeDescendingOrderInteger(118372));

function otherWayAnswer(n) {
    const convertString = n + '';
    const arr = convertString
        .split('')
        .sort( (a,b)=> b-a)
        .join('')
    const convertNumber = Number(arr);
    return convertNumber;
}

console.log(otherWayAnswer(118372))