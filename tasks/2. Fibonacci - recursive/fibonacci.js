export function getFibonacciUntil(n) {
  //TODO write your code here, remember it should be recursive
  let arr = new Array();

  callFibo(7)

  return arr;

  // program to display fibonacci sequence using recursion
  function fibonacci(num) {
      if(num < 2) {
          return num;
      }
      else {
          return fibonacci(num-1) + fibonacci(num - 2);
      }
  }


  function callFibo(nTerms) {
  	for(let i = 0; i < nTerms; i++) {
          arr.push(fibonacci(i));
      }

  }


}
