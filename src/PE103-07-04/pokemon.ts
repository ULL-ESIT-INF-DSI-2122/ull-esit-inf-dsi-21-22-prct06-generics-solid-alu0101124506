/**
 * Interface con la informacion minima que debe de tener cada producto pokemon
 */
export interface Pokemon {
    name: string;
    weight: number;
    height: number;
    hp: number;
    attack: number;
    defense: number;
    speed: number;
    getName(): string;
    getWeight(): number;
    getHeight(): number;
    getAttack(): number;
    getDefense(): number;
    getSpeed(): number;
    getHp(): number;
    getType(): string;
}

/**
 * Clase abstracta la cual se encarga de ser la base para la creacion de nuevos pokemons con la interfaz como base
 */
export abstract class BasicPokemon{
    
    public abstract newFirePokemon(): Pokemon;

    public abstract newGrassPokemon(): Pokemon;

    public abstract newElectricPokemon(): Pokemon;

    public abstract newWaterPokemon(): Pokemon;

}