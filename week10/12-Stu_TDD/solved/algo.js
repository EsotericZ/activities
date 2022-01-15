function Algo() {}

Algo.prototype.reverse = function(str) {
    return str.split('').reverse().join('');
};

Algo.prototype.isPalindrome = function(str) {
    return str === str.split('').reverse().join('');
};

Algo.prototype.capitalize = function(str) {
    const strArray = str.split(' ');
    // let capString = '';
    const newStrArray = strArray.map(word => word[0].toUpperCase() + word.slice(1));
    return newStrArray.join(' ');
};

module.exports = Algo;