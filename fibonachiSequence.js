var fibonachi = function(first, second, index) {
  if(index === 0) {
    return;
  } 
  console.log(first);
  fibonachi(second, (first + second), --index);
}

fibonachi(0, 1, 10);