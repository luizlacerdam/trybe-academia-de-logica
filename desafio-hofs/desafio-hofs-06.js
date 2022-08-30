const data = require('./data');

// 6 - Filtre e retorne um array com todos os álbuns que possuem nota igual a 100

const highestRatingFilter = () => {
  const bandas = data.bands.map((element) => element.bestAlbuns);
  return bandas.reduce((a, b) => [...a, ...b]).filter((item) => item.rate === 100);
}
console.log(highestRatingFilter());
module.exports = highestRatingFilter;