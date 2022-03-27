// 퀴즈!
let num = 2;
// num의 숫자가 짝수이면 👍, 홀수라면 👎를 출력하도록
// if문을 이용해서
// ternary 를 이용해서

if (num % 2 === 0){
    // num의 값은 2이고 짝수는 나누면 0으로 나눠 떨어지므로 2 나머지 0이면 true 아니면 false
    console.log('👍');
} else {
    console.log('👎');
}

//ternary operator
num % 2 === 0 ? console.log('👍') : console.log('👎');
let emoji = num % 2 === 0 ? '👍': '👎';
console.log(emoji)

