import { FirePokemon } from './firepokemon';
import { WaterPokemon } from './waterpokemon';
import { ElectricPokemon } from './electricpokemon';
import { GrassPokemon } from './grasspokemon';
import {BasicPokemon, Pokemon} from './pokemon';

export class PokemonMaker extends BasicPokemon {
    

    /** @param name El nombre del pokemon
    * @param weight Peso del pokemon
    * @param height Altura del pokemon
    * @param attack Los puntos de ataque del pokemon
    * @param defense Los puntos de defensa del pokemon
    * @param speed Los puntos de velocidad del pokemon
    * @param hp La vida del pokemon */

    constructor(private name: string, private weight: number, private height: number, private attack: number, private defense: number, private speed: number, private hp: number){
        name = name;
        weight = weight;
        height = height;
        attack = attack;
        defense = defense;
        speed = speed;
        hp = hp;
        super();
    }

    /**
    * Funcion que genero un nuevo pokemon de tipo Fuego basado en la interface Pokemon
    * @returns 
    */
    public newFirePokemon(): Pokemon {
        return new FirePokemon(this.name, this.weight, this.height, this.attack, this.defense, this.speed, this.hp);
    }

    /**
    * Funcion que genero un nuevo pokemon de tipo Hierba basado en la interface Pokemon
    * @returns 
    */
    public newGrassPokemon(): Pokemon {
        return new GrassPokemon(this.name, this.weight, this.height, this.attack, this.defense, this.speed, this.hp);
    }

    /**
    * Funcion que genero un nuevo pokemon de tipo Electrico basado en la interface Pokemon
    * @returns 
    */
    public newElectricPokemon(): Pokemon {
        return new ElectricPokemon(this.name, this.weight, this.height, this.attack, this.defense, this.speed, this.hp);
    }

    /**
    * Funcion que genero un nuevo pokemon de tipo Agua basado en la interface Pokemon
    * @returns 
    */
    public newWaterPokemon(): Pokemon {
        return new WaterPokemon(this.name, this.weight, this.height, this.attack, this.defense, this.speed, this.hp);
    }

}