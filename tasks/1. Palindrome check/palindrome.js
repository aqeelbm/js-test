export function isPalindrome(inputString) {
  // TODO: write your code here
  let reveredString = reverseInput(inputString);

  if(inputString === reveredString) {
    return true;
  } else {
    return false;
  }
}

function reverseInput(inputString) {
  let ouptput = '';

  for(let ii=inputString.length-1; ii>=0; ii--) {
    ouptput += inputString.charAt(ii);
  }

  return ouptput;
}
