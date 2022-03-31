export class ImperialLength {

    quantity: number;
    type: string;

    constructor(amount: number, type: string){
        this.quantity = amount;
        this.type = type;
    }

    inches(type: string): number | string{
        switch(type){
            case 'pies': {
                return this.quantity*0.083;
                break;
            }
            case 'yardas': {
                return this.quantity*0.028;
                break;
            }
            case 'millas': {
                return this.quantity*0.000016;
                break;
            }
        }
        return this.quantity; 
    }

    feet(type: string): number | string{
        switch(type){
            case 'pulgadas': {
                return this.quantity*12;
                break;
            }
            case 'yardas': {
                return this.quantity*0.33;
                break;
            }
            case 'millas': {
                return this.quantity*0.00019;
                break;
            }
        }
        return this.quantity; 
    }

    yards(type: string): number | string{
        switch(type){
            case 'pulgadas': {
                return this.quantity*36;
                break;
            }
            case 'pies': {
                return this.quantity*3;
                break;
            }
            case 'millas': {
                return this.quantity*0.00057;
                break;
            }
        }
        return this.quantity; 
    }

    miles(type: string): number | string{
        switch(type){
            case 'pulgadas': {
                return this.quantity*63360;
                break;
            }
            case 'pies': {
                return this.quantity*5280;
                break;
            }
            case 'yardas': {
                return this.quantity*1760;
                break;
            }
        }
        return this.quantity;
    }
}