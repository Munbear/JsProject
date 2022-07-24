// [ 자연수 뒤집어 배열로 만들기 ]

function reverseNumber(n) {
    return (n + '').split('').reverse().map( i => Number(i))
}

console.log(reverseNumber(12345));



