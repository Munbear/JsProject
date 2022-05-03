

function func(a,b,c,) {
    for(let i =0; i < arguments.length; i++){
        console.log(arguments[i]);
    }
}
func(2,3,5);

//
function func2 (a,b, ...파라미터들) {
    /// ...파라미터들 = 모든 파라미터를 []배열에 보관해준다.
    // rest parameter : 이 자리에 오는 모든 파라미터를 []에 담아줌

    console.log(파라미터들[2])
}
func2(1,2,3,4,5,6,7,9);

/** 함수 파라미터 자리에 붙이면 rest
 * 나머지는 spread
 *
 * rest parameter는 마지막에 작성해야 된다. 
 */

console.clear();
function func3(...rest) {
    for(let i=0; i < 5; i++){
        console.log(rest[i]);
    }
}

func3(1,2,3,4,6,12,3412,341,234,1234);


