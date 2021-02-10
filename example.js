import isBasterd from './lib/index';

console.log(
  isBasterd({
    name: 'kevin',
    age: 42,
    favoriteBeer: { name: 'heineken' },
    codeLanguages: [],
    available_for_work: true,
  }),
);
