class Complex implements Arithmeticable<number> {
    private valueA: number;
    constructor(value: number){
        this.valueA = value;
    }

    add(valueB: number): number{
        return this.valueA+valueB;
    }

    substract(valueB: number): number{
        return this.valueA-valueB;
    }

    multiply(valueB: number): number{
        return this.valueA*valueB;
    }

    divide(valueB: number): number{
        return this.valueA/valueB;
    }
}