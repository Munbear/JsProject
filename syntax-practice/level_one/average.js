function getArrayAverage(arr) {
    let result = 0;
    for(let i=0; i < arr.length; i++){
        console.log(arr[i]);
        result += arr[i]
    }
    return result/arr.length
}

getArrayAverage([1,2,3,4])
// getArrayAverage([5,5])


// function average(array) {
//     return array.reduce((a, b) => a + b) / array.length;
// }
//
// console.log(average([1,2,3,4]))
// console.log(average([5,5]))
