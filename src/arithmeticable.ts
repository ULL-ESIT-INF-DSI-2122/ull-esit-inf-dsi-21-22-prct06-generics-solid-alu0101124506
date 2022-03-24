export interface Arithmeticable<T> {

    add(valueB: T): T;
    substract(valueB: T): T;
    multiply(valueB: T): T;
    divide(valueB: T): T;
};