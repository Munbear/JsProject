// this keyword(1)
/**
 * this 키워드는 상황에 따라 3~4개의 뜻이 있다.
 * 1. window // 그냥 쓰거나 일반 함수 안에서 쓰면 {window}
 *  - window 는 모든 전역변수, 함수 dom을 보관하고 관리하는 전역객체이다
 *
 * 2. 2번재 방법은
 *  window라는 오브젝트에 함수 자료를 추가하는 문법일 뿐이다.
 *  전역함수를 만들거나 전역변수를 만들면 window {object} 안에 담긴다
 *  즉 this는 오브젝트 내에서 매소드(함수)에서 사용했을 때 메소드의 옵젝을 출력해준다.
 */

/// (1)번
function func(){
    console.log(this)
}

func();

//(2)
let obj = {
    data : 'kim',
    // 메소드(함수) 오브젝트내의 함수를 메소드라고 부른다.
    fuc : function() {
        console.log(this)
    }
}

obj.data.fuc();

let obj2 = {
    data1 : 'doPark',
    data10 : {
        함수() {
            console.log('일반 함수 메소드 입니다.');
        }
    },
    data20 : {
        함수입니다 : function() {
            console.log('이것도 메소드(함수) 입니다. ');
        }
    },
    data30 : {
    화살표함수 : () => {
        console.log('생성자 함수, 메소드(함수) 입니다. ')
    }
    }


}


obj2.data10.함수();
obj2.data20.함수입니다();
obj2.data30.화살표함수();