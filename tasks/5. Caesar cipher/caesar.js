export function encryptCaesar(inputString, key) {
  let decipher = '';

    let str = inputString.toUpperCase();

    for(let i = 0; i < str.length; i++){

      if(isUpperCase(str[i])){
        decipher += String.fromCharCode((str.charCodeAt(i) + key - 65) % 26 + 65);
      } else {
        decipher += String.fromCharCode((str.charCodeAt(i) + key - 97) % 26 + 97);
      }
    }

  return decipher;

}

function isUpperCase(str) {
    return str === str.toUpperCase();
}
