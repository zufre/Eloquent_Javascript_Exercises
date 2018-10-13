for(let i = 1; i <= 100; i++) {
  let mes = '';
  if (i % 3 == 0) mes += 'Fizz';
  if (i % 5 == 0) mes += "Buzz";  
  console.log(mes || i)
}
    