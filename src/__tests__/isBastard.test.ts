import isBasterd from '../index';
import Faker from 'faker';

describe('isBasterd', () => {
  test('isBastard happy flow', () => {
    expect(
      isBasterd({
        name: Faker.name.firstName(),
        age: 42,
        available_for_work: true,
        favoriteBeer: { name: 'brewdog' },
        codeLanguages: ['js'],
      }),
    ).toBe('you are a true bastard 😈');
  });

  test('isBastard throws error when no args are given', () => {
    function emptyfunction() {
      // @ts-ignore
      isBasterd();
    }
    expect(emptyfunction).toThrowError(/you must provide a bastard object/i);
  });

  test('isBastard throws error when name is not of type string', () => {
    function emptyfunction() {
      // @ts-ignore
      isBasterd({ name: 42 });
    }
    expect(emptyfunction).toThrowError(/name is not of type string/i);
  });

  test('isBastard throws error when no args are given', () => {
    function emptyfunction() {
      // @ts-ignore
      isBasterd({ name: Faker.name.firstName() });
    }
    expect(emptyfunction).toThrowError(/age is not of type number/i);
  });

  test('isBastard throws error when no args are given', () => {
    function emptyfunction() {
      // @ts-ignore
      isBasterd();
    }
    expect(emptyfunction).toThrowError(/you must provide a bastard object/i);
  });

  test('isBastard throws error when no args are given', () => {
    function emptyfunction() {
      // @ts-ignore
      isBasterd();
    }
    expect(emptyfunction).toThrowError(/you must provide a bastard object/i);
  });
});
