module.exports = function calculateHanoi(disksNumber,turnsSpeed) {
//   let turns=0;     //rekurs solution, slow
//   moveDisks = function (disksNumber) {
//     if (disksNumber<= 0) return ;
//     turns++;
//     console.log(turns);
//     moveDisks(disksNumber - 1);
//     moveDisks(disksNumber - 1);
//     return turns;
// }
// turns=moveDisks(disksNumber);

let turns=Math.pow(2,disksNumber)-1;

return {turns: turns, seconds: Math.floor(3600*turns/turnsSpeed)};

};
