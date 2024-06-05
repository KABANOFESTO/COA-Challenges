const transformString = (input) => {
    const length = input.length;

    // If divisible by 15, perform both operations else if divisible by 5 replace each 
    // character with its ASCii code else if divisble by 3 reverse whole string
    if (length % 15 === 0) {
        return input.split('').reverse().map(char => char.charCodeAt(0)).join(' ');
    } else if (length % 5 === 0) {
        return input.split('').map(char => char.charCodeAt(0)).join(' ');
    } else if (length % 3 === 0) {
        return input.split('').reverse().join('');
    } else {
        return input;
    }
}

console.log(transformString("Hamburger"));  // result=  "regrubmaH"
console.log(transformString("Pizza"));  // result=  "80 105 122 122 97"
console.log(transformString("Chocolate Chip Cookie"));  // result=  "eikooCpihCetalocohC"
