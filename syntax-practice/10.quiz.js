function solution(str) {
    let stack = []
    let value = str.replace(/(\s*)/g, "");
    for(let i in value){
        if(!isNaN(value[i])) {
            stack.push(value[i]);
        } else{
            const a = parseFloat(stack.pop())
            const b = parseFloat(stack.pop())
            switch(value[i]) {
                case'+':
                    stack.push(a+b);
                    break
                case"*":
                    stack.push(a*b);
                    break
            }
        }
    }
    return stack
}

console.log(solution("4 5 + 2 1 + *"))

// outout 4
// output 27
// 첫번째 값 : "1 1 + 1 + 1 +" output 4 1111+++4
// 두번째 값 : "4 5 + 2 1 + *" output 27 45+21+* 27

// 첫번재 연산 1111+++
// 두번재 연산 45+21+*
//
// 연산자 기호는는 전부 홀수 index에 위치
//5 9 13 // 0부터 시작하면 4 8 12
// 5 11 13 // 0부터 시작하면 4 8 12