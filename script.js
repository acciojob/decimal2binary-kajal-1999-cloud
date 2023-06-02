// write your code here
function decimalToBinary(num) {
    let res = [];
    while (num > 0) {
        res.push(num % 2);
        num = Math.floor(num / 2);
    }
    return res.reverse().join('');
}
console.log(decimalToBinary(7)); // Output: 111
console.log(decimalToBinary(10)); // Output: 1010
console.log(decimalToBinary(33)); // Output: 100001

}
module.export = num ;
// module.exports = threeSum;
