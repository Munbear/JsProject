// function printStar(n) {
//     for (let i = 0; i < n; i++) {
//         let str = "";
//         for (let j = 0; j <= i; j++) {
//             str += "*";
//         }
//         console.log(str);
//     }
// }
//
// printStar(5)

function solution(n) {
    let result = "";
    for(let i=0; i < n; i++){
        console.log(result += '*')
    }
}

solution(5);