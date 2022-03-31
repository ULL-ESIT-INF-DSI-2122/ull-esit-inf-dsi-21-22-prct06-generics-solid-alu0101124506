import { ImperialLength } from "./imperiallength";

export class MetricLengthAdapter extends ImperialLength {

    convert: ImperialLength;

    constructor(amount: ImperialLength){
        super(amount.quantity, amount.type);
        this.convert = amount;
    }

    inches(type: string): number | string{
        switch(type){
            case 'centimetros': {
                return this.convert.quantity*2.54;
                break;
            }
            case 'metros': {
                return this.convert.quantity*0.0254;
                break;
            }
            case 'kilometros': {
                return this.convert.quantity*0.0000254;
                break;
            }
        }
        return "Metrica invalida"; 
    }

    feet(type: string): number | string{
        switch(type){
            case 'centimetros': {
                return this.convert.quantity*30.48;
                break;
            }
            case 'metros': {
                return this.convert.quantity*0.3048;
                break;
            }
            case 'kilometros': {
                return this.convert.quantity*0.0003048;
                break;
            }
        }
        return "Metrica invalida"; 
    }

    yards(type: string): number | string{
        switch(type){
            case 'centimetros': {
                return this.convert.quantity*91.44;
                break;
            }
            case 'metros': {
                return this.convert.quantity*0.9144;
                break;
            }
            case 'kilometros': {
                return this.convert.quantity*0.0009144;
                break;
            }
        }
        return "Metrica invalida"; 
    }

    miles(type: string): number | string{
        switch(type){
            case 'centimetros': {
                return this.convert.quantity*160934.4;
                break;
            }
            case 'metros': {
                return this.convert.quantity*1609.344;
                break;
            }
            case 'kilometros': {
                return this.convert.quantity*1.609344;
                break;
            }
        }
        return "Metrica invalida";
    }
}