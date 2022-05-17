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
