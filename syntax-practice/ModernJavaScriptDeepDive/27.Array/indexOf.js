function makeIndexOf(item) {
    const arr = ['apple','orange','kiwi'];
    for(let i=0; i < arr.length; i++){
        if(item === arr[i]) {
            return i
        }
    }
}

console.log(makeIndexOf('kiwi'));