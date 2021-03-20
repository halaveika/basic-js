const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date===null || date===undefined || (date===NaN)) return 'Unable to determine the time of year!';// handle null
  if (date.getMilliseconds()===0) throw new Error('tricky moment');// handle ducks

  switch (date instanceof Date) {//handle !Date objetcs
    case date.getMonth()<2 || date.getMonth()===11: return 'winter';
      break;
     case date.getMonth()<5 : return 'spring';
      break;
    case date.getMonth()<8 : return 'summer';
      break;
    case date.getMonth()<11 : return 'autumn';
      break;
        }

};
