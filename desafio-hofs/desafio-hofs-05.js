const data = require('./data');

// 5 - Filtre e retorne um array com as informações das bandas que contenham 'Rock' no gênero musical

const rockFilter = () => {
  const bandas = data.bands;
  return bandas.filter((elemento) => elemento.genre.includes('rock') || elemento.genre.includes('Rock'));
}
console.log(rockFilter());
module.exports = rockFilter;