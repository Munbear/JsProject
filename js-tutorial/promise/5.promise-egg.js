// fatch 네트워크에서 무언가 데이터를 가져올때

function fetchEgg(chicken) {
    return new Promise.resolve(`${chicken} => mgg`);
}

fetchEgg('chicken').then((egg) => console.log(egg));
