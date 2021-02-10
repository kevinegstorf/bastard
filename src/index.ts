interface Basterd {
  name: string;
  age: number;
  available_for_work: boolean;
  favoriteBeer: { name: string };
  codeLanguages: string[];
}

export default function isBasterd(bastard: Basterd) {
  if (typeof bastard !== 'object') {
    throw new Error('You must provide a bastard object');
  }

  const { name, age, favoriteBeer, codeLanguages, available_for_work } = bastard;

  if (typeof name !== 'string') {
    throw new Error('name is not of type string');
  }

  if (typeof age !== 'number') {
    throw new Error('age is not of type number');
  }

  if (typeof favoriteBeer !== 'object') {
    throw new Error('favoriteBeer is not of type object');
  }

  if (Array.isArray(codeLanguages) === false) {
    throw new Error('codeLanguages is not of type array');
  }

  if (typeof available_for_work !== 'boolean') {
    throw new Error('available_for_work is not of type boolean');
  }
  return `you are a ${true} bastard 😈`;
}
