const arrayToList = (arr) => {
  let rest = null;
  let list;
  for (let i = arr.length; i >=0; i--) {
    list = {value: arr[i], rest: list};
  }
  return list;
}
const listToArray = (list) => {
  arr = [];
  while (list.rest != null) {
    arr.push(list.value);
    list = list.rest;
  }
  return arr;
}

const prepend = (value, list) => { 
  return {value, rest: list};
}
      
// const nth = (list, num) => {
//   let output; 
//   for(i = 0; i <= num; i++) {
//     if(list.rest == null && i != 0) {
//       output = undefined ;
//     }else{
//       output = list.value;
//       list = list.rest;
//     }
//   }
//   return output;
//  }
    
const nth = (list, n) => {
  if (!list) {
    return undefind;
  }else if (n==0) {
    return list.value;
  } else {
    return nth(list.rest, n-1);
  }
}


    
console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20])));
// → [10, 20]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30, 40, 50, 60]), 5));
// → 20