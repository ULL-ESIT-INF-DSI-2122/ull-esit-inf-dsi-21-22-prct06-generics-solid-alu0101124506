import 'mocha';
import {expect} from 'chai';
import {Rational} from '../src/rational';

let myRational = new Rational(1, 2);
let myRationalB = new Rational(3, 4);

describe('Clase Rational', () => {
    it('Add', () =>{
        let result = new Rational(10, 8);
        expect(myRational.add(myRationalB)).to.be.eql(result);
    });
    it('substract', () =>{
        let result = new Rational(-2, 8);
        expect(myRational.substract(myRationalB)).to.be.eql(result);
    });
    it('multiply', () =>{
        let result = new Rational(3, 8);
        expect(myRational.multiply(myRationalB)).to.be.eql(result);
    });
    it('divide', () =>{
        let result = new Rational(4, 6);
        expect(myRational.divide(myRationalB)).to.be.eql(result);
    });
});