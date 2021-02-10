import isBasterd from '../index';

test('isBastard', () => {
  expect(
    isBasterd({
      name: 'kevin',
      age: 42,
      available_for_work: true,
      favoriteBeer: { name: 'brewdog' },
      codeLanguages: ['js'],
    }),
  ).toBe('you are a true bastard 😈');
});
