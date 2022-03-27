import 'mocha';
import {expect} from 'chai';
import {Combat} from '../src/ejercicio1/combat';
import {Marvel} from '../src/ejercicio1/marvel';
import {Pokemon} from '../src/ejercicio1/pokemon';
import {DragonBall} from '../src/ejercicio1/dragonball';
import {StarWars} from '../src/ejercicio1/starwars';
import {Fighter} from '../src/ejercicio1/fighter';
import {Fighterdex} from '../src/ejercicio1/fighterdex';

let ninetales = new Pokemon('Ninetales', 'Fuego', 15, 5, {hpMax: 35, attack: 55, def: 40, speed: 90});
let vegeta = new DragonBall('Vegeta', 80, 190, {hpMax: 500, attack: 600, def: 500, speed: 250});
let ironman = new Marvel('Ironman', 290, 315, {hpMax: 400, attack: 300, def: 450, speed: 150});
let yoda = new StarWars('Yoda', 30, 100, {hpMax: 100, attack: 50, def: 100, speed: 50});

describe('Comprobamos la clase Pokemon', () => {

  it('ninetales es una instancia de pokemon', () => {
    expect(ninetales).to.be.instanceOf(Pokemon);
  });

  it('ninetales es una instancia luchador', () => {
    expect(ninetales).to.be.instanceOf(Fighter);
  });

  it('ninetales pertenece al universo de Pokemon', () => {
    expect(ninetales.getUniverso()).to.be.equal('Pokemon');
  });

  it('ninetales es tipo electrico', () => {
    expect(ninetales.getType()).to.be.equal('Fuego');
  });

  it('ninetales posee 55 puntos de ataque', () => {
    expect(ninetales.getStats().attack).to.be.equal(55);
  });
});

describe('Comprobamos la clase Marvel', () => {

    it('Ironman es una instancia de Marvel', () => {
      expect(ironman).to.be.instanceOf(Marvel);
    });
  
    it('Ironman es una instancia luchador', () => {
      expect(ironman).to.be.instanceOf(Fighter);
    });
  
    it('Ironman pertenece al universo de Marvel', () => {
      expect(ironman.getUniverso()).to.be.equal('Marvel');
    });
  
    it('Ironman posee 300 puntos de ataque', () => {
      expect(ironman.getStats().attack).to.be.equal(300);
    });
});

describe('Comprobamos la clase StarWars', () => {

    it('yoda es una instancia de StarWars', () => {
      expect(yoda).to.be.instanceOf(StarWars);
    });
  
    it('yoda es una instancia luchador', () => {
      expect(yoda).to.be.instanceOf(Fighter);
    });
  
    it('yoda pertenece al universo de Star Wars', () => {
      expect(yoda.getUniverso()).to.be.equal('Star Wars');
    });
  
    it('yoda posee 50 puntos de ataque', () => {
      expect(yoda.getStats().attack).to.be.equal(50);
    });
});

describe('Comprobamos la clase DragonBall', () => {

    it('vegeta es una instancia de DragonBall', () => {
      expect(vegeta).to.be.instanceOf(DragonBall);
    });
  
    it('vegeta es una instancia luchador', () => {
      expect(vegeta).to.be.instanceOf(Fighter);
    });
  
    it('vegeta pertenece al universo de Dragon Ball', () => {
      expect(vegeta.getUniverso()).to.be.equal('Dragon Ball');
    });
  
    it('vegeta posee 600 puntos de ataque', () => {
      expect(vegeta.getStats().attack).to.be.equal(600);
    });
});

describe('Comprobamos la clase Combate', () => {

  let combate1 = new Combat(yoda, ironman);
  let combate2 = new Combat(ninetales, vegeta);

  it('Combate1 es un combate', () => {
    expect(combate1).to.be.instanceOf(Combat);
  });

  it('Combate1 es ganado por Ironman', () => {
    expect(combate1.combatir()).to.be.equal('Ironman gana!');
  });

  it('Combate2 es ganado por Vegeta', () => {
    expect(combate2.combatir()).to.be.equal('Vegeta gana!');
  });
});

describe('Comprobamos la clase Fighterdex', () => {

  let fightdex = new Fighterdex([]);

  it('Fightdex es una instancia de Fighterdex', () => {
    expect(fightdex).to.be.instanceOf(Fighterdex);
  });

  it('Fightdex esta vacia', () => {
    expect(fightdex.fighterdexSize()).to.be.equal(0);
  });

  it('Fightdex ahora tiene 3 luchadores', () => {
    fightdex.addFighter(yoda);
    fightdex.addFighter(ironman);
    fightdex.addFighter(vegeta);
    expect(fightdex.fighterdexSize()).to.be.equal(3);
  });

  it('Fightdex tiene a vegetta777', () => {
    expect(fightdex.buscarLuchador(vegeta)).not.to.null;
  });

  it('Fightdex no tiene a pikachu', () => {
    expect(fightdex.buscarLuchador(ninetales)).to.be.equal(null);
  });

  it('Se ha eliminado a yoda. Ahora solo hay 2 luchadores', () => {
    fightdex.delFighter(yoda);
    expect(fightdex.fighterdexSize()).to.be.equal(2);
  });
});