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

// console.log(mediaIdadeClasse(data));

// requisito 3
const getResultFight = (fighterName, fightersStats, DragonStatus) => {
  const fighterAttack = fightersStats.attack;
  const fighterHp = fightersStats.hp;
  const dragonAttack = DragonStatus.attack;
  const dragonHp = DragonStatus.hp;

  if (fighterAttack >= dragonHp && dragonAttack >= fighterHp) {
    return 'Derrota o dragão e não sobrevive';
  }

  if (fighterAttack <= dragonHp && dragonAttack >= fighterHp) {
    return `Não derrota o dragão e não sobrevive. O dragão sai com ${
      dragonHp - fighterAttack
    } de hp`;
  }

  if (fighterAttack >= dragonHp && dragonAttack <= fighterHp) {
    return `Derrota o dragão e sobrevive. ${fighterName} sai com ${
      fighterHp - dragonAttack
    } de hp`;
  }

  if (fighterAttack < dragonHp && dragonAttack < fighterHp) {
    return `Não derrota o dragão e sobrevive. ${fighterName} sai com ${
      fighterHp - dragonAttack
    } de hp e o dragão com ${dragonHp - fighterAttack} de hp`;
  }
};

const handleDragon = ({ theMightyHofDragon, fightersStats }) => {
  return Object.keys(fightersStats).map((lutador) => {
    return {
      [lutador]: getResultFight(lutador, fightersStats[lutador], theMightyHofDragon)
    };
  });
};

console.log(handleDragon(data));