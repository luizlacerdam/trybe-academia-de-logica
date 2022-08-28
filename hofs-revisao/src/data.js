const classes = {
  barbarian: '0938aa23-f153-4937-9f88-4858b24d6bce',
  mage: '533bebf3-6bbe-41d8-9cdf-46f7d13b62ae',
  orc: 'bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5',
  human: '78460a91-f4da-4dea-a469-86fd2b8ccc84',
  elf: '89be95b3-47e4-4c5b-b687-1fabf2afa274',
  warrior: 'baa6e93a-f295-44e7-8f70-2bcdc6f6948d',
  thief: 'e8481c1d-42ea-4610-8e11-1752cfc05a46',
  alien: '9e7d4524-363c-416a-8759-8aa7e50c0992',
};

module.exports = {
  classes,
  theMightyHofDragon: { attack: 90, hp: 100 },
  fighters: [
    {
      name: 'Rogerinho',
      class: classes.barbarian,
      age: 46,
    },
    {
      name: 'Mubra',
      class: classes.orc,
      age: 38,
    },
    {
      name: 'Magalu',
      class: classes.alien,
      age: 256,
    },
    {
      name: 'Surida',
      class: classes.warrior,
      age: 12,
    },
    {
      name: 'Nyka',
      class: classes.thief,
      age: 24,
    },
    {
      name: 'Shera',
      class: classes.elf,
      age: 56,
    },
    {
      name: 'Nailuc',
      class: classes.human,
      age: 28,
    },
    {
      name: 'Dollynho',
      class: classes.alien,
      age: 10000,
    },
    {
      name: 'Kaimao',
      class: classes.orc,
      age: 27,
    },
    {
      name: 'SnoopDog',
      class: classes.elf,
      age: 420,
    },
    {
      name: 'Nagamor',
      class: classes.mage,
      age: 88,
    },
    {
      name: 'Togepi',
      class: classes.barbarian,
      age: 1,
    },
  ],
  fightersStats: {
    Rogerinho: { attack: 99, hp: 15 },
    Mubra: { attack: 50, hp: 400 },
    Magalu: { attack: 42, hp: 183 },
    Surida: { attack: 195, hp: 120 },
    Nyka: { attack: 70, hp: 70 },
    Shera: { attack: 404, hp: 120 },
    Nailuc: { attack: 90, hp: 200 },
    Dollynho: { attack: 1, hp: 1 },
    Kaimao: { attack: 298, hp: 60 },
    SnoopDog: { attack: 420, hp: 247 },
    Nagamor: { attack: 85, hp: 50 },
    Togepi: { attack: 9, hp: 101 },
  },
};