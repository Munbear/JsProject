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
