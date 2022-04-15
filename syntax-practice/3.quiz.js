function pulsOfMatirx(arr1, arr2) {
    let result = [];
    for(let i=0; i < arr1.length; i += 1){
        result.push(arr1[i].map((x,y) => arr1[i][y] + arr2[i][y]));
    }
    return result;
}

console.log(pulsOfMatirx([[1,2],[2,3]],[[3,4],[5,6]]))

function bestMaricxAnswer(arr1,arr2) {
    return arr1.map((a,i) => a.map((b,j) => b + arr2 [i][j]));
}

console.log(bestMaricxAnswer([[3,8],[4,7]],[[5,6],[7,8]]));

