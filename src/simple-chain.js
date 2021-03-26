const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arr: [],

  getLength() {
    return this.arr.length;
  },

  addLink(value) {
    this.arr.push(`( ${value} )`);
    return this;
  },

  removeLink(position) {
    if (!Number.isInteger(position) || position < 1 || position > this.getLength()) {
      this.arr = [];
      throw Error();
  }
  this.arr.splice(position - 1, 1);
  return this;
  },

  reverseChain() {
    this.arr.reverse()
    return this;
  },
  
  finishChain() {
    let result = this.arr.join('~~');
    this.arr.length = 0;
    return result;
  }
};

module.exports = chainMaker;
