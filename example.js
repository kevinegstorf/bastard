import isBastard from './lib/index';

console.log(
  isBastard({
    name: 'kevin',
    age: 42,
    favoriteBeer: { name: 'any' },
    codeLanguages: [],
    available_for_work: true,
  }),
);
