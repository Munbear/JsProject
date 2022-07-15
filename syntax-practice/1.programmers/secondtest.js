function secondTest(input) {
    let removeNum = input.slice(2);
    let setArr = removeNum.split('');

    let splitHello = setArr.splice(0,11);
    let splitBye = setArr.splice(1,9);
    let splitUseless = setArr.splice(2,13);

    let convertHello = splitHello.join('')
    let convertBye = splitBye.join('')
    let convertUseless = splitUseless.join('')

    let arrHello = convertHello.split(' ').reverse()
    let arrBye = convertBye.split(' ').reverse()
    let arrUseless = convertUseless.split(' ').reverse()

    let strHello = arrHello.join()
    let strBye = arrBye.join()
    let strUseless = arrUseless.join()

    let resultHello = strHello.split(',').join(' ');
    let resultBye = strBye.split(',').join(' ');
    let resultUseless = strUseless.split(',').join(' ');


    let joinArr = [resultHello,resultBye,resultUseless]
    console.log(joinArr.join('\n'));
}


secondTest('3 Hello World Bye World Useless World')