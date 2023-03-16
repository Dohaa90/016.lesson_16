const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

function generateKey(length, characters) {
    let result = '';
    for (let i = 0; i < length; i++) {
        let randomNumbers = Math.floor(Math.random() * characters.length);
        result += characters[randomNumbers];
    }
    return result;
}

const key = generateKey(16, characters);
console.log(key); // eg599gb60q926j8i