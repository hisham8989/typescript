function combine(a, b) {
    return typeof a === 'number' && typeof b === 'number'
        ? a + b
        : a.toString() + b.toString();
}
console.log(combine(10, 30));
console.log(combine("hisham", "khan"));
