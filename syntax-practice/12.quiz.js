function StringChallenge(str) {
    const num = {
        'zero' : 0,
        'one' : 1,
        'two' : 2,
        'three' : 3,
        'four' : 4,
        'fix' : 5,
        'six' : 6,
        'seven' : 7,
        'eight' : 8,
        'nine' : 9,
    }
    const operator = {
        'plus' : (a, b) => a + b,
        'minus' : (a, b) => a - b,
    }

    const numKeys = Object.entries(num).map(([key, value]) => key)
    const operatorKeys = Object.entries(operator).map(([key, value]) => key)

    let changedNum = str
    numKeys.map((key) => {
        changedNum = changedNum.replace(new RegExp(key, 'g'), `${num[key]}`)
    })

    const numRegex = /\d*/g
    const nums = Array.from(changedNum.matchAll(numRegex)).filter(arr => arr[0] !== '').map(arr => Number(arr[0])).reverse()

    const operatorRegex = new RegExp(`(${operatorKeys.join('|')})`, 'g')
    const operators = Array.from(changedNum.matchAll(operatorRegex)).map(arr => arr[0])


    let resultNum = nums.pop()
    operators.map((o) => {
        resultNum = operator[o](resultNum, nums.pop())
    })

    let resultString = resultNum.toString();
    resultString = resultString.replace('-', '')
    if (resultNum < 0) {
        resultString = 'negative' + resultString
    }
    ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].map((n) => {
        resultString = resultString.replace(new RegExp(n, 'g'), numKeys[n])
    })

    return resultString;
}

console.log(StringChallenge("onezeropluseight"));
console.log(StringChallenge("oneminusoneone"));

