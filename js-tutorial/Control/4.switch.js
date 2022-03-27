// switch 도 조건문이다.
// 정해진 범위안의 값에 대해 특정한 일을 해야 하는 경우
let day = 3; // 0:mon 1:tue ...6:sun 이렇게 만들고 싶으면
let dayName;
if(day === 0) {
    dayName = 'mon';
} else if(day === 1) {
    dayName = 'tue'
} else if(day === 2) {
    dayName = 'wen'
} else if(day === 3) {
    dayName = 'thur'
} else if(day === 4) {
    dayName = 'satu'
} else if(day === 5) {
    dayName = 'sun'
} else if(day === 6) {
    dayName = 'tue'
}

switch (day) {
    case 0:
        dayName = '월요일'
        break

    case 1:
        dayName = '화요일'
        break

    case 2:
        dayName = '수요일'
        break

    case 3:
        dayName = '목요일'
        break
    case 4:
        dayName = '금요일'
        break
    case 5:
        dayName = '토요일'
        break
    case 6:
        dayName = '일요일'
        break
    default:
        console.log('해당하는 요일이 없음')
}

console.log(dayName);

// break 를 걸지 않아도 되는 경우
let condition = 'okay';
let text;
switch (condition){
    case 'okay':
    case 'good':
        text = '좋은';
        break
    case 'bad':
        text = '나쁨';
        break;
}

console.log(condition);