import {Arithmeticable} from '../src/arithmeticable';

/**
 * Rational
 * 
 * @author Micaela Lucia Mungay Juncal
 * 
 */

 /**  @class clase en la cual se implementa la interface Arithmeticable para valores racionales*/
export class Rational implements Arithmeticable<Rational>{


   /**
    * @param numerator numerador del racional
    * @param denominator denominador del racional
    */

    private numerator: number;
    private denominator: number;
  
    constructor(numerator: number, denominator: number) {
      this.numerator = numerator;
      this.denominator = denominator;
    }
  
    /** @function add implementada de la interface, donde sumamos dos numeros racionales */
    add(valueB: Rational): Rational {
      return new Rational(
        this.numerator * valueB.denominator + valueB.numerator * this.denominator,
        this.denominator * valueB.denominator     
      );
    }     
  
    /** @function substract implementada de la interface, donde restamos dos numeros racionales */
    substract(valueB: Rational): Rational {
      return new Rational(
        this.numerator * valueB.denominator - valueB.numerator * this.denominator,
        this.denominator * valueB.denominator
      );
    }       
  
    /** @function multiply implementada de la interface, donde multiplicamos dos numeros racionales */
    multiply(valueB: Rational): Rational {
      return new Rational(
        this.numerator * valueB.numerator,
        this.denominator * valueB.denominator
      );
    }

    /** @function divide implementada de la interface, donde dividimos dos numeros racionales */
    divide(valueB: Rational): Rational {
      return new Rational(
        this.numerator * valueB.denominator,
        valueB.numerator * this.denominator
      );     
    }
}