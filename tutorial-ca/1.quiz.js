/**
 *  quiz 1
 * 간단한 메소드 만들기
 * - 사람이라는 오브젝트가 하나 있습니다.
 *  이 오브젝트에 sayHi라는 함수를(메소드를)하나 추가하고 싶습니다.
 *  사람.sayHi() 라고 작성하면 콘솔창에 '안녕 나는 손흥민' 이라는 글자 출력
 *
 */
let 사람 = {
    name : '손흥민',
    sayHi : function (){
        console.log(`안녕 나는 ${this.name}`)
    },
}
사람.sayHi();

/**
 * quiz 2
 * 오브젝트 내의 데이터를 전부 더해주는 메소드만들기
 * 자료,data 안에 있는 모든 숫자를 더해서 출력해라
 * 조건1) 자료라는 object 중괄호 {} 내에 코드 작성 금지
 */

let 자료 = {
    data : [1,2,3,4,5],
}

자료.전부더하기 = function() {
    let sum = 0;
    this.data.forEach( i => sum = sum + i)
    console.log(sum);
}

자료.전부더하기();

/**
 * setTimout() 함수를 이용해서 1초 후에 '버튼이에요' 라는 글자가 콘솔창에 출력하게 만들어라
 */

setTimeout( () => {
    console.log('3초뒤 작동됨')
}, 3000);