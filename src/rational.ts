import {Arithmeticable} from '../src/arithmeticable';

export class Rational implements Arithmeticable<Rational>{

    private numerator: number;
    private denominator: number;
  
    constructor(numerator: number, denominator: number) {
      this.numerator = numerator;
      this.denominator = denominator;
    }
  
    add(valueB: Rational): Rational {
      return new Rational(
        this.numerator * valueB.denominator + valueB.numerator * this.denominator,
        this.denominator * valueB.denominator     
      );
    }     
  
    substract(valueB: Rational): Rational {
      return new Rational(
        this.numerator * valueB.denominator - valueB.numerator * this.denominator,
        this.denominator * valueB.denominator
      );
    }       
  
    multiply(valueB: Rational): Rational {
      return new Rational(
        this.numerator * valueB.numerator,
        this.denominator * valueB.denominator
      );
    }

    divide(valueB: Rational): Rational {
      return new Rational(
        this.numerator * valueB.denominator,
        valueB.numerator * this.denominator
      );     
    }
}

let myRational = new Rational(1, 2);
let myRationalB = new Rational(3, 4);

console.log(myRational.add(myRationalB));
console.log(myRational.substract(myRationalB));
console.log(myRational.multiply(myRationalB));
console.log(myRational.divide(myRationalB));