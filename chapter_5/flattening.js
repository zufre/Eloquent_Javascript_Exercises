let arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.
const flatten = (array) => {
return array.reduce((a,b) => a.concat(b), [])
}
console.log(flatten(arrays))

// → [1, 2, 3, 4, 5, 6]