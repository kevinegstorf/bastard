interface Basterd {
  name: string;
  age: number;
  isBasterd: boolean;
  favoriteBeer: { name: string };
  codeLanguages: string[];
}

export default function isBasterd(basterd: Basterd) {
  console.log(basterd);
  return false;
}
