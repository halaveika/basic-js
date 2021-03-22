const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
     calculateDepth(arr){
      return 1 + (arr instanceof Array ? arr.reduce((maxDepth, element)=>{
        return Math.max(maxDepth, this.calculateDepth(element));
      }, 0) : -1);
    }
  }

  