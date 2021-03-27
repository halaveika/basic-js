const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  const repeatArr = [];
  function repeat (arr, str, repeatTimes, separator = '+', addSeparator = '|'){
    if (repeatTimes === undefined) arr.push(String(str));
    else {
      for (let i = 0; i < repeatTimes; i++) {
        arr.push(String(str));
      }
    }
    if (separator != '') return arr.join(separator);
    if (addSeparator !='') return arr.join(addSeparator);
  };
  const repeatArrAdd = [];
  let strAdd = '';
  if (options.addition || options.addition === false || options.addition === null) strAdd = repeat(repeatArrAdd, options.addition, options.additionRepeatTimes, '', options.additionSeparator);

  return repeat(repeatArr, str + strAdd, options.repeatTimes, options.separator, '');
};
  