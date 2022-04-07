function Cat(name) {
    this.name = name;
    // 2. arrow 한수를 사용: arrow함수는 렉시컬 환경에서의 this를 기억함
    // 화살표 함수 밖에서 제일 근접한 스코프의 this를 가리킴
    this.printName = () => {
        console.log(`고양이 이름을 출력: ${this.name}`);
    };
    // // 1. bind 함수를 이용해서 수동적으로 바인딩 해주기
    // this.printName = this.printName.bind(this);

}

function Dog(name) {
    this.name = name;
    this.printName = function () {
        console.log(`강아지 이름 출력: ${this.name}`)
    };
}

const cat = new Cat('알로');
const dog = new Dog('백구');
cat.printName();
dog.printName();

dog.printName = cat.printName;
dog.printName();
cat.printName();

function printOnMonitor(printName) {
    console.log('모니터를 준비하고, 전달된 콜백을 실행');
    printName();
}