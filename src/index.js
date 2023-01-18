module.exports = function check(str, bracketsConfig) {

  let arr = bracketsConfig.reduce((a, b) => a.concat(b));
  let arrWithBrackets = new Array();
  for (let i = 0; i < str.length; i++) {

    if(arr.indexOf(str[i]) < 0 ){
      return false;
    }

    for (let n = 0; n < bracketsConfig.length; n++) {

      if (bracketsConfig[n][0] !== bracketsConfig[n][1]) {

        if (str[i] === bracketsConfig[n][0]) {
          arrWithBrackets.push(n)
          break;
        } else if (str[i] === bracketsConfig[n][1]) {
          if (arrWithBrackets[arrWithBrackets.length - 1] === n) {
            arrWithBrackets.pop()
            break;
          } else {
            return false;
          }
        }

      } else if (bracketsConfig[n][0] === bracketsConfig[n][1]) {

        if ((str[i] === bracketsConfig[n][0]) && (arrWithBrackets[arrWithBrackets.length - 1] !== n)) {
          arrWithBrackets.push(n)
          break;
        } else if ((str[i] === bracketsConfig[n][0]) && (arrWithBrackets[arrWithBrackets.length - 1] === n)) {
          arrWithBrackets.pop()
          break;
        }

      }
    }
  }

  if (arrWithBrackets.length === 0) {
    return true
  }

  return false;
}
