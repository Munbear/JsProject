function ArrayIsArray(item) {
    if(typeof item === typeof []){
        console.log(true)
    } else if (typeof item === typeof {} && typeof item == null) {
        console.log(false)
    } else {
        console.log(false)
    }
}

ArrayIsArray()