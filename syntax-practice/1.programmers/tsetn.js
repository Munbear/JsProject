function solution(input) {
    let result = ''
    let splitArr = input.split('')
    let reversArr = splitArr.sort()
    let joinStr = reversArr.join('');
    for(let i = joinStr.length-1; i >=0; i--){
        result += joinStr[i]
    }
    console.log(result)
}

solution('interview')