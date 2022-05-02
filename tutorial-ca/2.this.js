// this의 3번째 뜻
// (3)


/**
 * Constructor ( 일명 오브젝트 생성기계)
 */


function 기계() {
    this.name = 'park'; //instance 라고 부른다. 새로운 오브젝트를 생성한다.
}

let object = new 기계();
console.log(object);

// this의 3번째 뜻
// (4)

///
function func(e) {
    let arr = [1,2,3];
    arr.forEach( (a) => {
        console.log(this);
    });
}

func();


let obj = {
    names : ['kim', 'Lee', 'Park'],
    func : function () {
        obj.names.forEach( () => {
            // arrow function 특징 : 내부의 this 값을 변화시키지 않음
            console.log(this);
        })
    }
}

obj.func();