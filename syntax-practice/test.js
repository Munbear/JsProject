function stringOperator(str) {
    let result = str;
    const numString = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', "negative"];
    const valueNum = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "-"]
    const operators = ['minus', 'plus']
    for (let i = 0; i < numString.length; i++) {
        if (result.includes(numString[i])) {
            result = result.replaceAll(numString[i], valueNum[i])
        }
    }
    for (let i = 0; i < operators.length; i++) {
        if (result.includes(operators[i])) {
            const nums = result.split(operators[i])
            let endResult = 0
            switch (operators[i]) {
                case "plus":
                    for (let num of nums) {
                        endResult += Number(num)
                    }
                    break
                case "minus":
                    for (let num of nums) {
                        endResult -= Number(num)
                    }
                    break
            }
            for (let i = 0; i < valueNum.length; i++) {
                if (endResult.toString().includes(valueNum[i])) {
                    endResult = endResult.toString().replace(valueNum[i], numString[i])
                }
            }
            result = endResult
        }
    }
    return result
}

console.log(stringOperator("oneminusoneone"));
