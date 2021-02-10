import isBasterd from '../index';

test('isBastard', () => {
  expect(
    isBasterd({ name: 'kevin', age: 42, isBasterd: false, favoriteBeer: { name: 'brewdog' }, codeLanguages: ['js'] }),
  ).toBe(false);
});
