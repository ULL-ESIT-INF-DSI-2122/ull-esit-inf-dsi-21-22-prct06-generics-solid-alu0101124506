import 'mocha';
import {expect} from 'chai';
import {MetricLengthAdapter} from '../src/PE103/metriclengthadapter';
import {ImperialLength} from '../src/PE103/imperiallength';
import {MetricLength} from '../src/PE103/metriclength';

describe('Comprobamos la clase MetricLengthAdapter', () => {

    it('De pulgadas a metros', () => {
        let pulgada = new ImperialLength(5, "pulgadas");
        let convert = new MetricLengthAdapter(pulgada);
        expect(convert.inches("metros")).to.be.eql(0.127);
    });

    it('De pulgadas a kilometros', () => {
        let pulgada = new ImperialLength(5, "pulgadas");
        let convert = new MetricLengthAdapter(pulgada);
        expect(convert.inches("kilometros")).to.be.eql(0.000127);
    });

    it('De pies a kilometros', () => {
        let pies = new ImperialLength(5, "pies");
        let convert = new MetricLengthAdapter(pies);
        expect(convert.feet("kilometros")).to.be.eql(0.001524);
    });

    it('De pies a metros', () => {
        let pies = new ImperialLength(5, "pies");
        let convert = new MetricLengthAdapter(pies);
        expect(convert.feet("metros")).to.be.eql(1.524);
    });

    it('De millas a centimetros', () => {
        let millas = new ImperialLength(5, "millas");
        let convert = new MetricLengthAdapter(millas);
        expect(convert.miles("centimetros")).to.be.eql(804672);
    });
});