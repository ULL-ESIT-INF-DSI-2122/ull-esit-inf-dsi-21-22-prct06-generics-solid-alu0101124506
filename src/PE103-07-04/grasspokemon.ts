import {Pokemon} from './pokemon';


export class GrassPokemon implements Pokemon {
    
    /** @param name El nombre del pokemon
    * @param weight Peso del pokemon
    * @param height Altura del pokemon
    * @param attack Los puntos de ataque del pokemon
    * @param defense Los puntos de defensa del pokemon
    * @param speed Los puntos de velocidad del pokemon
    * @param hp La vida del pokemon */

    constructor(public name: string, public weight: number, public height: number, public attack: number, public defense: number, public speed: number, public hp: number){
        this.name = name;
        this.weight = weight;
        this.height = height;
        this.attack = attack;
        this.defense = defense;
        this.speed = speed;
        this.hp = hp;
    }

    /**
    * Getter para el name
    * @returns name
    */
     getName(): string {
        return this.name;
    }

    /**
    * Getter para el weight
    * @returns weight
    */
    getWeight(): number {
        return this.weight;
    }

    /**
    * Getter para el height
    * @returns height
    */
    getHeight(): number {
        return this.height;
    }

    /**
    * Getter para el attack
    * @returns attack
    */
    getAttack(): number {
        return this.attack;
    }

    /**
    * Getter para el defense
    * @returns defense
    */
    getDefense(): number {
        return this.defense;
    }

    /**
    * Getter para el speed
    * @returns speed
    */
    getSpeed(): number {
        return this.speed;
    }

    /**
    * Getter para el hp
    * @returns hp
    */
    getHp(): number {
        return this.hp;
    }

    /**
    * Getter para el Tipo
    * @returns el tipo del pokemon en este caso Hierba
    */
    getType(): string {
        return "Hierba";
    }

}