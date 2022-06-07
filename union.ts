function combine(a: number | string, b: number | string) {
  return typeof a === 'number' && typeof b === 'number'
    ? a + b
    : a.toString() + b.toString()
}


console.log(combine(10,30));
console.log(combine("hisham","khan"));
