module.exports = function reverse (n) {
    let result = '';
    const str = n.toString()[0] === '-' ? n.toString().slice(1) : n.toString(); 

    for (i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }

    return result;
}
