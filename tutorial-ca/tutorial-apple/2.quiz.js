/**
 * var a = [1,2,3];
 * var b = '김밥';
 * var c = [...b, ...a];
 * console.log(c);
 */

// 아래의 코드의 출력 결과는 ?
// 1. spread 문제 1
let a = [1,2,3];
let b = '김밥';
let c = [...b, ...a];
console.log(c);
// 출력 결과: ['김','밥',1,2,3]

// 2. spread 문제 2
let a = [1,2,3];
let b = ['you', 'are'];
let c = function(a,b) {
    console.log( [[...a], ...[...b]][1])
}
c(a,b)
// 출력 결과 : [ [1,2,3],'you']


// 3. default 파라미터 문제 1
function 함수1(a = 5, b = a * 2) {
    console.log(a + b);
    return 10
}
함수1(3);
// 출력 결과 : 9


// 4. default 파라미터 문제 2
function 함수2(a = 5, b = a * 2){
    console.log(a + b);
}
함수2(undefined, undefined);
// 출력 결과 : 15



function arr(...rest) {
    // 여기 어떤코드가 들어가면 될까요?
    console.log(rest)
}
let newArray = arr[1,2,3,4,5];
console.log(newArray);



/**
 * 최댓값 구하기
 * Math.max() 라는 내장함수를 사용하면 최댓값을 구할 수 있다
 * 예) Math.max(5,6,7,8,9)
 * let numbers = [2,3,4,5,6,7,8,9,2,6,2,6,3,6,8,9,4]
 * numbers 안에 있는 숫자들을 Math.max()에 집어넣어서 쓰고 싶은데
 * 직접 소괄호 안에 10개 넘는 숫자를 손수 기입하기 귀찮습니다.
 * 이럴 땐 어떻게 코드를 짜면 좋을까요?
 */

let numbers = [2,3,4,5,6,7,8,9,2,6,2,6,3,6,8,9,4]
Math.max(...numbers)
console.log(Math.max(...numbers))


/**
 * 글자를 알파벳순으로 정렬해주는 함수를 만들고 싶습니다.
 * array 내의 데이터를 알파벳순으로 정렬하고 싶을때
 * sort() 라는 array 내장함수를 붙여 사용합니다. (array에만 적용가능!)
 *
 * console.log( ['b','c','a'].sort() );
 * /// ['a','b','c'] 출력됨
 *
 * 정렬('bear')라고 사용하면
 * 콘솔창에 a b e r 이렇게 입력한 문자를 알파벳 순으로 출력되게 만들고 싶으면 어떻게 해야될까요?
 */

function 정렬(text) {
    // 여기 어떤 코드가 들어갈까야 할까요?
    [...text].sort();
}

정렬('bear');


/**
 * 글자세기('aaacbbb')라고 입력하면 콘솔창에
 * { a:2, b:3, c:1} 이렇게 출력해주는 굴자세기() 함수를 만드시오
 * */

function 글자세기(글자) {
    [...글자].forEach(function(a) {
      if( 결과[a] > 0 ){
          결과[a] = 결과[a] + 1
      } else {
          결과[a] = 1
      }
    });
    console.log(결과);
}

글자세기();