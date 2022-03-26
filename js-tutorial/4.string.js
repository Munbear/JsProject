// 문자열 타입
let string = 'hello world';
string = 'hey!';
console.log(string);

//특수문자 출력

// 따옴표
string="'hi~'";
console.log(string);

//Escape 코드식
// 줄바꿈
string='hi\n dudu';
console.log(string);

string = 'hi\nduu\t\tmy name';
console.log(string);

string = 'hi\nduu\t\tmy name\\\u09AC'
console.log(string);

// 템플릿 리터럴 (Template Literal)
let id = 'bear';
let greetings = 'Mun' + id + "\nenjoy your day";
console.log(greetings);

greetings = `Hi, ${id}
enjoy my day`;

console.log(greetings);