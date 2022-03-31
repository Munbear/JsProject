function getBanana() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('🍌');
        } , 1000)
    });
}

function getApple() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('🍎');
        }, 3000);
    });
}

function getOrange() {
    return Promise.reject(new Error('no orange'));
}

//바나나와 사과를 같이 가져오기
getBanana()
    .then(banana =>
        getApple()
            .then((apple) => [banana, apple])
    ).then(console.log);

// Promise.all 병렬적으로 한번에 모든 Promise들을 실행@
Promise.all([getBanana(), getBanana()])
    .then((fruits) => console.log('all', fruits));

// Promise.race 주어진 프로미스중에 제일 빨리 수행된것이 출력함
Promise.race([getBanana(), getApple()])
    .then((fruit) => console.log('rece', fruit));

// 성공했을 대만 가져올거라면 all
Promise.race([getBanana(), getApple(), getOrange()])
    .then((fruit) => console.log('error', fruit))
    .catch(console.log);


// 이 모든 결과에 대해서 받아보고 싶다 하면 allSettled를 사용함
Promise.allSettled([getBanana(), getApple()])
    .then((fruit) => console.log('allSettled', fruit));

// 프로미스는 콜백함수를 사용하지 않고 깔끔하게 사용할 수 있다




