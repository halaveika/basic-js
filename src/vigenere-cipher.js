const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(direct=true) {
    this.direct = direct;
  }
  encrypt(str, key) {
    str = str.toUpperCase();
    key = key.toUpperCase();
    let strEncrypt = [];
    let charCode;

    for (let i = 0, j = 0; i < str.length; i++){
      if(str.charCodeAt(i) < 65 || str.charCodeAt(i) > 90) strEncrypt[i] = str[i];
      else {
      charCode = (str.charCodeAt(i) + key.charCodeAt(j)) % 26;  // c=(m+k) mod n
      strEncrypt[i] = String.fromCharCode(charCode + 65);
      if (j + 1 >= key.length) j=0; // if length key word is smaller then encrypted str
      else j++;
    }
  }
  if (this.direct) return strEncrypt.join('');
  else return strEncrypt.reverse().join('');
  }

  decrypt(str, key) {
    str = str.toUpperCase();
    key = key.toUpperCase();
    let strDecrypt = [];
    let charCode;
    for (let i = 0, j = 0; i < str.length; i++){
      if(str.charCodeAt(i) < 65 || str.charCodeAt(i) > 90) strDecrypt[i] = str[i];
      else {
        charCode = (str.charCodeAt(i) + 26 - key.charCodeAt(j)) % 26; // m=(c+n-k) mod n
        strDecrypt[i] = String.fromCharCode(charCode + 65) ;
        if (j + 1 >= key.length) j=0;
        else j++;
      }
    }

    if (this.direct) return strDecrypt.join('');
    else  return strDecrypt.reverse().join('');
  }
}


module.exports = VigenereCipheringMachine;
