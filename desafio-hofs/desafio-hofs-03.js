const { bands } = require('./data');
const data = require('./data');

// 3 - Retorne um array utilizando HOF's que contenha apenas o nome das bandas

const getBandsName = () => {
const bandas = data.bands;
return bands.map((elemento) => elemento.bandName);
}
console.log(getBandsName());
module.exports = getBandsName;