function smallestString(s) {
    let arr = s.split('');

    while (true) {
        let count = 0;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                if ((arr[i] === 'b' && arr[i+1] === 'a') || (arr[i] === 'c' && arr[i+1] === 'b')) {
                    let temp = arr[i];
                    arr[i] = arr[i + 1];
                    arr[i + 1] = temp;
                    count++;
                }
            }
        }
        if (count <= 0) {
            break;
        }
    }

    return arr.join('')
}

console.log(smallestString('baacba'))
console.log(smallestString('ababbaab'))

// baacba -> aabbca
// ba
// ababbaab -> aaaabbbb

