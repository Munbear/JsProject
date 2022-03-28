// 함수내부에서 외부로부터 주어진 인자의 값을 변경하는 것은 좋지않다.
// 상태변경이 필욯나 경우에는, 새로운 상태를(오브젝트, 값 ) 만들어서 반환해야 함
// 원시값 값에 의한 복사
// 객체값 참조에 의한 복사 (메모리주소)

function display(num) {
    console.log(num);
}
const value = 4;
display(value);

//안좋은 예
function displayObj(obj) {
    obj.name = 'bob'; //// 외부로 부터 주어진인자(오브젝트)를 내부에서 변경한면 안된다.
    console.log(obj);
}
const dowon = {name: 'dowon'};
displayObj(dowon);
console.log(dowon);

/// 만약 변경을 해야된다면
function changeName(obj) { /// 이름부터 변경하는 느낌을 주도록
    return {...obj, name:'dod'} // 반환할때는 새로운 오브젝트 만들기!
}