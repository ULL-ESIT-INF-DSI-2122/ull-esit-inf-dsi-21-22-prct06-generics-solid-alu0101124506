export class MetricLength {

    quantity: number;

    constructor(amount: number){
        this.quantity = amount
    }

    centimetro(type: string): number{
        switch(type){
            case 'metro': {
                return this.quantity*0.01;
                break;
            }
            case 'kilo': {
                return this.quantity*0.00001;
                break;
            }
        }
        return this.quantity; 
    }

    metros(type: string){
        switch(type){
            case 'centimetro': {
                return this.quantity*100;
                break;
            }
            case 'kilo': {
                return this.quantity*0.001;
                break;
            }
        }
        return this.quantity; 
    }

    kilometros(type: string){
        switch(type){
            case 'centrimetro': {
                return this.quantity*100000;
                break;
            }
            case 'metro': {
                return this.quantity*1000;
                break;
            }
        }
        return this.quantity; 
    }
}