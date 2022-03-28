// 주어진 숫자 만큼 0부터 수횐하는 함수
// 순회하면서 주어진 특정한 일을 수행해야 함
// 5, 순회하는 숫자를 다 출력하고 싶음
// 5, 순회하는 숫자의 두배값을 다 출력하고 싶음
// 힌트: function iterate(max, action) { }

function iterate(max,action) {
    for(let i = 0; i < max; i++){
        action(i);
    }
}

function log(unm){
    console.log(unm)
}

function doubleLog(unm){
    console.log(unm * 2)
}


iterate(1000, (num) => console.log(num));
iterate(100, (num => console.log(num / 2)));

setTimeout(()=> {
    console.log('3asldkj')
}, 1000)