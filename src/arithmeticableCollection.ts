class ArithmeticableCollection<T> {

    private collection: T[];

    constructor(collec: T[]){
        this.collection = collec;
    }

    addArithmeticable(newElement: T){
        this.collection.push(newElement);
    }

    getArithmeticable(index: number): T{
        return this.collection[index];
    }

    getNumberOfArithmeticables(): number{
        return this.collection.length;
    }
}