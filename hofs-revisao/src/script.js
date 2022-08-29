const data = require('./data.js');
const { fighters } = require('./data.js');
// requisito 1
const combatExp = (obj) => {
  const lutadoresSorted = obj.fighters.sort((a,b) => b.age - a.age);
  return `${lutadoresSorted[0].name} possui maestria. ${lutadoresSorted[lutadoresSorted.length - 1].name} ainda é um pupilo.`;
};

// requisito 2
const mediaIdadeClasse = ({classes, fighters}) => {
  return Object.keys(classes).map((element) => {
    const id = classes[element];
    const idadeFighter = fighters.filter((lutador) => lutador.class === id).map((element) => element.age);
    let total = 0; 
    idadeFighter.forEach(element => {
      total += element;
    });
    const media = Math.floor(total / idadeFighter.length);
    return {
      [element]: media,
    }
  });
};

console.log(mediaIdadeClasse(data));