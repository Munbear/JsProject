{
    const x= 1;
    {
        const y =2;
        console.log(x);
    }
    console.log(x);
    // console.log(y); 에러남
    // 자식 블럭은 부모 블럭을 참조 할 수 있다
    // 부모 블럭은 자식 블럭을 참조 할 수 없음
}

{
    const text = 'global'; // 전역 변수, 전역 스코프(글로벌 변수, 글러벌 스코프)
    {
        const text = 'inside block1';// 지역 변수(로컬변수), 지역 스코프(로컬스코프)
        {
            const text = 'inside block2'; // 
            console.log(text);
        }
    }
}