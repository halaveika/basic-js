const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
	if (!(arr instanceof Array)) throw new Error;
	let arrTrans = arr.slice();
  for (let i = 0; i < arrTrans.length; i++) {
      if(arrTrans[i]==="--discard-next" && i<arrTrans.length-1)arrTrans[i+1]="TRASH";
      if(arrTrans[i]==="--discard-prev" && i>0) arrTrans.splice(i-1,1);
      if(arrTrans[i]==="--double-next" && i< arrTrans.length-1 && arrTrans[i+1]!=="TRASH") arrTrans[i] = arrTrans [i+1];
      if(arrTrans[i]==="--double-prev" && i>0 && arrTrans[i-1]!=="TRASH") arrTrans[i] = arrTrans[i-1];
  }

  return arrTrans.filter(element =>{
		if(element==="TRASH" || element==="--discard-next" || element==="--discard-prev" || element==="--double-next" || element==="--double-prev") return false;
		else return true;	});
  };