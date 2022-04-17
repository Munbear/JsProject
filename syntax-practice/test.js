function getFinalString(s) {
    let result = '';
    if( s == s.toString()){
        return s.substring(1,4)
    }else{
        result = s.toString();
        return result
    }
}

console.log(getFinalString('AAWSWS'));