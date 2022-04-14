/// s값에 숫자와 영어로 표기된 문자열이 섞여 있으면 영어로 표기된 글자를 숫자로 바꿔라
function solution(s) {
    let number = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let answer = s;
    for(let i=0; i < number.length; i++) {
        let arr = answer.split(number[i]);
        console.log(arr);
        answer = arr.join(i);
    }

    return Number(answer);
}

console.log(solution('12five8'));

