function ArrayIsArray(item) {
    if(typeof item === typeof []){
        return true
    } else {
        return false
    }
}
//
// ArrayIsArray([]);
// ArrayIsArray(new Array());
console.log(ArrayIsArray())
