const data = require('./data');

/* 2 - Através do destructuring, acesse o nome e os melhores álbuns primeira banda, 
retornando uma string no seguinte formato: "os melhores álbuns do Radiohead: In Rainbows"
*/

const getBestAlbuns = (obj) => {
  const [band1] = obj.bands;
  const {bandName, bestAlbuns} = band1;
  
  const albuns = bestAlbuns.reduce((acc, curr) => `${acc}  ${curr.name}`, []);
  return albuns
  //return `O melhor álbunm do ${bandName} é ${albumOne.name}.`
};
console.log(getBestAlbuns(data));

module.exports = getBestAlbuns;