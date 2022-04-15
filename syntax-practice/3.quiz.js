/**
 * 행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행, 같은 열의 값을 서로 더한 결과가 됩니다. 2개의 행렬 arr1과 arr2를 입력받아,
 * 행렬 덧셈의 결과를 반환하는 함수를 완성해주세요.
 * 
 */

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

