export function areParenthesesBalanced(inputString) {

    if(inputString.length === 0 || inputString === '') {
      return true
    }

    let stack = [];

    for(let i=0; i<inputString.length; i++) {
      let input = inputString.charAt(i);

      if(input === '(') {
        stack.push(input)
      } else if(input === ')' && stack.length != 0) {
        stack.pop();
      } else {
        return false
      }
    }

    if(stack.length != 0) {
      return false;
    }

    return true;
}
