const data = require('./data');

// 4 - Filtre e retorne um array apenas com o nome das bandas que são dos Estados Unidos

const usaFilter = () => {
  const bandas = data.bands;
  return bandas.filter((elemento) => elemento.country === 'United States');
}
console.log(usaFilter());
module.exports = usaFilter;