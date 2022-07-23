function solution(numbers, start, finish){
    return start.map((val, idx) => numbers
        .slice(...[start[idx], finish[idx]+1])
        .reduce((prev, cur) => prev + cur, 0)
    );
}

console.log(solution([100,101,102, 103,104],[1,2],[2,4]));