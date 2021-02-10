interface Basterd {
    name: string;
    age: number;
    available_for_work: boolean;
    favoriteBeer: {
        name: string;
    };
    codeLanguages: string[];
}
export default function isBasterd(bastard: Basterd): boolean;
export {};
