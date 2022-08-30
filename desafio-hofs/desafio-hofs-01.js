const data = require('./data');

/** 1 - Retorne e exiba um array com as informações da primeira e da segunda banda utilizando destructuring
*/
const getBandsInformation = (obj) => {
  const [banda1, banda2] = obj.bands;
  return [banda1, banda2];
};
console.log(getBandsInformation(data));
module.exports = getBandsInformation;