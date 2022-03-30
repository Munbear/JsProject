// 구조 분해 할당 Desturcturing Assignment
// 데이터 뭉치(그룹화)를 쉽게 만들 수 있다

const fruits = ['A','B','C','D'];
const [first, second, ...others] = fruits;
console.log(first);
console.log(second);
console.log(others);

const point = [1,2];
const [x, y, z= 0] = point;
console.log(x);
console.log(y);
console.log(z);

//함수로 생각해보기
function createEmoji() {
    return ['apple', '🍎'];
}
const [title, emoji] = createEmoji();
console.log(title);
console.log(emoji);

const bear = {
    name:'mun',
    age: 25,
    job: 's/w devlepoer'
};
function display({name, age, job}){
    console.log('이름', name);
    console.log('나이', age);
    console.log('직업', job);
}
display(bear);

////////////////////////////////
const {name, age, job:occupation, pat='cat'} = bear;

console.log(name);
console.log(age);
console.log(occupation);
console.log(pat);



// Quiz
const prop = {
    name: 'Button',
    styles: {
        size: 20,
        color: 'black',
    },
};

function changeColor({name, styles:{color, size}}) {
    console.log(color);
    console.log(size);
    console.log(name);
}

changeColor(prop)

