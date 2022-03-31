function fetchEgg(chicken) {
    return Promise.resolve(`${chicken} => 🥚`);
}

function fryEgg(egg) {
    return Promise.resolve(`${egg} => 🍳`);
}

function getChicken() {
    return Promise.reject(new Error('can not find 🐓'));
}


/// quiz 풀이
async function asyncQuiz() {
    let chicken;
    try{
        chicken = await getChicken();
    } catch {
        chicken = '🐔';
    }
    const egg = await fetchEgg(chicken);
    return fryEgg(egg);
}

asyncQuiz().then(console.log);
///