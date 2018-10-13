// Your code here.
const range = (a, b, c = 1) => {
  arr = [];
  if (a < b) {
    for (let i = a; i <= b; i += c) {
      arr.push(i);
    }
  }else if (a > b) {
    for (let i = a; i >= b; i += c) {
      arr.push(i);
    }
  }
  return arr;
}

const sum = (arr) => {
  let sum = 0;
  for (let num of arr) {
    sum+= num;
  }
  return sum;
}
         
console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55