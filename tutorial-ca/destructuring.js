// array data 전부 변수에 담기
// destructuring
// 등호로 기본값 지정 가능

// let arr = [2,3,4];
// let [a,b,c,= 10] = [];

// let obj = {
//     name : 'kim',
//     age : 25,
// };

// - 변수명을 key명과 똑같이 작명해야된다.
// let {name : 나이 } = {name : 'kim'};

let name = 'ji';
let age = 32;

let obj = {
    name,
    age
}
console.log(obj.name);

let obj2 = {
    name : 'Park',
    age : 25
}

// 함수 파라미터값에 obj를 넣을수도 있다
function func( {name, age} ) {
    console.log(name, age);
}
func(obj2)

function func2([name,age]) {
    console.log('dd',name);
    console.log('d',age)
}

func2( [1,2])

let bodyInfo = {
    body : {
        height : 190,
        weight  : 70
    },
    size : ['top : Large', "bottom : 30inch"],
};

let {
    body: {
        height,
        weight
    },
    size: [top,bottom]
} = bodyInfo;
