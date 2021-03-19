const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (Array.isArray(members)) return members.filter(element=>typeof element==='string').map(element =>
    element.replace(/\s+/g,'').toUpperCase()).sort((a,b)=>a[0].localeCompare(b[0])).reduce((accumulator,curentValue)=>accumulator+curentValue[0],'');
    else return false;
};
