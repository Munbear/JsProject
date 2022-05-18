const arr = [1,2,3,4,5];
console.log(arr.slice());

const todos = [
    {id:1, content: 'html', completed: true},
    {id:2, content: 'css', completed: false},
    {id:3, content: 'javascript', completed: true},
];

const _todos = todos.slice(2);
console.log(_todos);

const test = [1,2,3,4,5,6,7,8];
console.log(test.length -7)
console.log(arr.includes(5,-7))
console.clear();

const testSort = [40,100,1,5,2,25,10];
testSort.sort( (a,b) => a - b);
console.log(testSort.sort( (a,b) => a - b));

[10,20,30].forEach( (item, index, arr) => {
    console.log(`elementValue: ${item}, index : ${index}, this: ${arr}`);
})


// reduce
const sum = [1,2,3,4,5,6,7,8,9,10]
let result = sum.reduce( (accumulator,currentValue, index,array) => accumulator + currentValue, 0);
console.log(sum);

// fundIndex
console.clear();
const users = [
    {id:1, name:'Lee'},
    {id:2, name:'Kim'},
    {id:3, name:'Park'},
    {id:4, name:'Choi'},
]

//id가 2인 요소의 인덱스를 구한다.
console.log(users.findIndex(user => user.id == 2)); // -> 1
// name이 Park 인 요소의 인덱스를 구한다.
console.log(users.findIndex(user => user.name == 'Park')); // -> 2

function predicate(key, value) {
    // key 와 value를 기억하는 클로저를 반환
    return item => item[key] === value;
}

console.log(users.findIndex(predicate('id', 2)));
 //
console.log(users.findIndex(predicate('name', 'Park')));

