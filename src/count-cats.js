const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  if (Array.isArray(matrix)) {return matrix.join().split(',').reduce((accumulator2,currentValue2)=>{if(/^\^\^$/.test(currentValue2)) return accumulator2+=1;else return accumulator2;
  },0);}
else return 0;
};
