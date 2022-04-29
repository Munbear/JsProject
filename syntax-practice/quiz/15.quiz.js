function triangleStar(n) {
    for(let i=0; i < n; i++){
        let str = "";
        let starCount = n - i;
        for (let k = 0; k < i; k++) {
            str += " ";
        }
        for (let j = 0; j < starCount; j++) {
            str += "*";
        }
        for (let j = 0; j < starCount; j++) {
            str += "*";
        }
        console.log(str);
    }
    for(let i=0; i < n; i++){
        let str = "";
        let starCount = n - i;
        for (let k = 0; k < starCount-1; k++) {
            str += " ";
        }
        for (let j = 0; j <= i; j++) {
            str += "*";
        }
        for (let j = 0; j <= i; j++) {
            str += "*";
        }
        console.log(str);
    }
    // console.log("*****");
    // console.log("****");
    // console.log("***");
    // console.log("**");
    // console.log("*");
}


// result = 5, i = 0, n = 5
// result = 4, i = 1, n = 5
// result = 3, i = 2, n = 5
// result = 2, i = 3, n = 5
// result = 1, i = 4, n = 5

// *****
// ****
// ***
// **
// *

triangleStar(5);