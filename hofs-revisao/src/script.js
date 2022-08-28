const { fighters } = require('./data.js');
const data = require('./data.js');

// requisito 1
const combatExp = (obj) => {
  const lutadoresSorted = obj.fighters.sort((a,b) => a.age - b.age);
  return `${lutadoresSorted[0].name} possui maestria. ${lutadoresSorted[lutadoresSorted.length - 1].name} ainda é um pupilo.`;
};
console.log(combatExp(data));