/**
 * level one 소수 만들기
 * **/

function solution(nums) {
    for(let i=0; i < nums.length; i++){
        if(nums[i] == 1){
            return false
        } else if (nums[i] == 2){
            return true
        } else {

        }
    }

    // return result
}

// logsolution([1,2,3,4]);
console.log(solution([1,2,3,4]))
//solution([1,2,7,6,4])