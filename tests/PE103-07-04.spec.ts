import 'mocha';
import {expect} from 'chai';
import {Pokemon} from '../src/PE103-07-04/pokemon';
import {PokemonMaker} from '../src/PE103-07-04/pokemonmaker';
import { FirePokemon } from '../src/PE103-07-04/firepokemon';
import { WaterPokemon } from '../src/PE103-07-04/waterpokemon';
import { ElectricPokemon } from '../src/PE103-07-04/electricpokemon';
import { GrassPokemon } from '../src/PE103-07-04/grasspokemon';


describe('Comprobamos el funcionamiento de PokemonMaker', () => {
    it('Comprobamos que es una instancia de FirePokemon', () => {
      expect(new PokemonMaker("Ninetale", 50, 100, 50, 50, 20, 200).newFirePokemon()).to.be.instanceOf(FirePokemon);
    });

    it('Comprobamos que es de tipo Fuego', () => {
        expect(new PokemonMaker("Ninetale", 50, 100, 50, 50, 20, 200).newFirePokemon().getType()).to.be.eql("Fuego");
    });

    it('Comprobamos que es una instancia de WaterPokemon', () => {
        expect(new PokemonMaker("Mayikarp", 50, 100, 50, 50, 20, 200).newWaterPokemon()).to.be.instanceOf(WaterPokemon);
    });
    it('Comprobamos que es de tipo Agua', () => {
      expect(new PokemonMaker("Mayikarp", 50, 100, 50, 50, 20, 200).newWaterPokemon().getType()).to.be.eql("Agua");
    });

    it('Comprobamos que es una instancia de ElectricPokemon', () => {
        expect(new PokemonMaker("Pikachu", 50, 100, 50, 50, 20, 200).newElectricPokemon()).to.be.instanceOf(ElectricPokemon);
    });
    it('Comprobamos que es de tipo Electrico', () => {
      expect(new PokemonMaker("Pikachu", 50, 100, 50, 50, 20, 200).newElectricPokemon().getType()).to.be.eql("Electrico");
    });

    it('Comprobamos que es una instancia de GrassPokemon', () => {
        expect(new PokemonMaker("Roselia", 50, 100, 50, 50, 20, 200).newGrassPokemon()).to.be.instanceOf(GrassPokemon);
    });
    it('Comprobamos que es de tipo Hierba', () => {
      expect(new PokemonMaker("Roselia", 50, 100, 50, 50, 20, 200).newGrassPokemon().getType()).to.be.eql("Hierba");
    });
});   