// JSON : JavaScript Object Notation
// 서버와 클라이언트(브라우저, 모바일) 간의 HTTP 통신을 위한
// 오브젝트 형태의 텍스트 포맷
// stringify(object): JSON
// parse(JSON): object 변환

const ellie = {
    name: 'ellie',
    age: 20,
    eat: () => {
        console.log('eat');
    },
}

// 직렬화 시리얼라이징 : 객체를 문자열로 변환
const json = JSON.stringify(ellie);
console.log(ellie);
console.log('json:',json);

// 역직렬화 디시리얼라이징 : 문자열 데이터를 자바스크립트 객체로 변환
const obj = JSON.parse(json);
console.log(obj)




