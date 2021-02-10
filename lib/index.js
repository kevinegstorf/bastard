"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isBasterd(bastard) {
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
    return true;
}
exports.default = isBasterd;
