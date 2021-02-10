import isBasterd from './lib/index';

console.log(
  isBasterd({
    name: 'kevin',
    age: 42,
    favoriteBeer: { name: 'any' },
    codeLanguages: [],
    available_for_work: true,
  }),
);
