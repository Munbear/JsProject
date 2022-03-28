function sum(a, b) {
    return a+ b;
}
const result = sum(1,2)
console.log(result);


// 사용예제 2
function fullName(lastName, firstName){
    return `${firstName} ${lastName}`
}

let lastName = 'kim';
let firstName = 'sisu';
console.log(fullName(firstName, lastName));

let lastName2 = 'kim';
let firstName2 = 'susu';
console.log(fullName(firstName2, lastName2));