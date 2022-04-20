[![Coverage Status](https://coveralls.io/repos/github/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct06-generics-solid-alu0101124506/badge.svg?branch=master)](https://coveralls.io/github/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct06-generics-solid-alu0101124506?branch=master)

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=ULL-ESIT-INF-DSI-2122_ull-esit-inf-dsi-21-22-prct06-generics-solid-alu0101124506&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=ULL-ESIT-INF-DSI-2122_ull-esit-inf-dsi-21-22-prct06-generics-solid-alu0101124506)

[![Tests](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct06-generics-solid-alu0101124506/actions/workflows/tests.yml/badge.svg)](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct06-generics-solid-alu0101124506/actions/workflows/tests.yml)

## Practica 6: Clases e interfaces genéricas. Principios SOLID

### Ejercicio 1: El combate definitivo

Para realizar este ejercicio utilizaremos el concepto de la clase Pokemon de la practica anterior.
Primero creamos la clase 'Fighter' la cual sera la base para las demas clases. Esta tendra lo basico para cada clase, como el nombre, peso, altura, estadisticas, etc.

```
/**
 * Tipo de dato que contiene las estadisticas del luchador
 */
 export type stats = {
    hpMax: number,
    attack: number,
    def: number,
    speed: number
  }
  
  /**
   * Clase abstracta para definir a los luchadores
   */
  export abstract class Fighter {
    private hpCombate: number = 0;
    /**
     * Constructor de la clase Fighter
     * @param name nombre del luchador
     * @param weight peso del luchador
     * @param height altura del luchador
     * @param estadisticas Array con las estadisticas (hp, attk, def, speed)
     */
    constructor(private readonly name: string, private readonly weight: number,
      private readonly height: number, private readonly estadisticas: stats) {
      this.hpCombate = estadisticas.hpMax;
    }
    /**
     * Resta el daño recibido a la salud actual
     * @param damage Daño recibido
     */
    restarHP(damage: number) {
      this.hpCombate -= damage;
    }
    /**
     * Getter para el nomnbre
     * @returns name
     */
    getName() {
      return this.name;
    }
    /**
     * Getter para el weight
     * @returns weight
     */
    getWeight() {
      return this.weight;
    }
    /**
     * Getter para la height
     * @returns height
     */
    getHeight() {
      return this.height;
    }
    /**
     * Getter hp del combate
     * @returns hpCombate
     */
    getHPCombate() {
      return this.hpCombate;
    }
    /**
     * Getter para el array de estadisticas
     * @returns estadisticas
     */
    getStats() {
      return this.estadisticas;
    }
    /**
     * Getter para obtener el universo de donde viene el luchador
     */
    abstract getUniverso(): string;
  }
  ```

  Luego tendremos una clase para cada universo la cual extiende de la clase explicada anteriormente.
  
  Tenemos la clase 'Pokemon' la cual representa a un luchador de dicho universo:

  ```
  import {Fighter, stats} from './fighter';
/**
 * Clase para definir un Pokemon
 */
export class Pokemon extends Fighter {
  private universo: string = 'Pokemon';
  /**
   * Constructor de la clase Pokemon
   * @param name nombre del pokemon
   * @param type tipo del pokemon
   * @param weight peso del pokemon
   * @param height altura del pokemon
   * @param estadisticas Estadisticas del pokemon
   */
  constructor(name: string, private readonly type: string, weight: number,
      height: number, estadisticas: stats) {
    super(name, weight, height, estadisticas);
  }
  /**
   * Getter -> Obtener universo al que pertenece el luchador (Pokemon)
   * @returns universo
   */
  getUniverso() {
    return this.universo;
  }
  /**
   * Getter -> Obtener el type del pokemon
   * @returns type
   */
  getType() {
    return this.type;
  }
}
```


Tenemos la clase 'DragonBall' la cual representa a un luchador de dicho universo:

```
import {Fighter, stats} from './fighter';
/**
 * Clase para definir un personaje de Dragon Ball
 */
export class DragonBall extends Fighter {
  private universo: string = 'Dragon Ball';
  /**
   * Constructor de la clase Dragon Ball
   * @param name name del personaje de Dragon Ball
   * @param weight peso del personaje de Dragon Ball
   * @param height altura del personaje de  Dragon Ball
   * @param estadisticas Estadisticas personaje de del Dragon Ball
   */
  constructor(name: string, weight: number,
      height: number, estadisticas: stats) {
    super(name, weight, height, estadisticas);
  }
  /**
   * Getter -> Obtener universo al que pertenece el luchador (Dragon Ball)
   * @returns universo
   */
  getUniverso() {
    return this.universo;
  }
}
```


Tenemos la clase 'Marvel' la cual representa a un luchador de dicho universo:

```
import {Fighter, stats} from './fighter';
/**
 * Clase para definir un Marvel
 */
export class Marvel extends Fighter {
  private universo: string = 'Marvel';
  /**
   * Constructor de la clase Marvel
   * @param name name del personaje de Marvel
   * @param weight peso del personaje de Marvel
   * @param height altura del personaje de Marvel
   * @param estadisticas Estadisticas del personaje de Marvel
   */
  constructor(name: string, weight: number,
      height: number, estadisticas: stats) {
    super(name, weight, height, estadisticas);
  }
  /**
   * Getter -> Obtener universo al que pertenece el luchador (Marvel)
   * @returns universo
   */
  getUniverso() {
    return this.universo;
  }
}
```


Tenemos la clase 'StarWars' la cual representa a un luchador de dicho universo:

```
import {Fighter, stats} from './fighter';
/**
 * Clase para definir un personaje de Star Wars
 */
export class StarWars extends Fighter {
  private universo: string = 'Star Wars';
  /**
   * Constructor de la clase Star Wars
   * @param name nombre del personaje de Star Wars
   * @param weight peso del personaje de Star Wars
   * @param height altura del personaje de  Star Wars
   * @param estadisticas Estadisticas personaje de del Star Wars
   */
  constructor(name: string, weight: number,
      height: number, estadisticas: stats) {
    super(name, weight, height, estadisticas);
  }
  /**
   * Getter -> Obtener universo al que pertenece el luchador (Star Wars)
   * @returns universo
   */
  getUniverso() {
    return this.universo;
  }
}
```


Luego, creamos la clase 'Combat' la cual dado dos luchadores, del mismo o diferente universo, se calcula segun sus estadisticas cual seria el ganador en un combate. Utilizamos parte de la practica 5 en el caso de 'Pokemon' debido a que el tipo de pokemon afecta a la lucha.

```
import {Fighter} from './fighter';
import {Pokemon} from './pokemon';
import {DragonBall} from './dragonball';
import {Marvel} from './marvel';
import {StarWars} from './starwars';
/**
 * Clase combate. Esta clase realiza el combate entre dos luchadores.
 */
export class Combat {
  private datoAtaque: number[] = new Array(2);
  /**
   * Contructor de la clase Combate. Instancia un combate
   * @param luchador1 Fighter 1
   * @param luchador2 Fighter 2
   */
  constructor(public readonly luchador1: Fighter,
    public readonly luchador2: Fighter) {}
  /**
   * Realiza el combate entre los luchadores
  */
  combatir() {
    this.calcularAtaques();
    console.log('COMBATE -> ' + this.luchador1.getName() + ' VS ' +
    this.luchador2.getName());
    let iterator: number = 1;
    while ((this.luchador1.getHPCombate() > 0) &&
      (this.luchador2.getHPCombate() > 0)) {
      console.log("\n -[ Ronda " + iterator + " ]-");
      if ((iterator % 2) == 0) {
        console.log(this.luchador2.getName() + " inflinje -" +
        this.datoAtaque[1] + " a " + this.luchador1.getName());
        this.luchador1.restarHP(this.datoAtaque[1]);
      } else {
        console.log(this.luchador1.getName() + " inflinje -" +
        this.datoAtaque[0] + " a " + this.luchador2.getName());
        this.luchador2.restarHP(this.datoAtaque[0]);
      }
      iterator++;
      console.log(this.luchador1.getName() + " [HP: " +
      +(this.luchador1.getHPCombate()).toFixed(2) + "] VS " +
      this.luchador2.getName() + " [HP: " +
      +(this.luchador2.getHPCombate()).toFixed(2) + "]");
    }
    if (this.luchador1.getHPCombate() <= 0) {
      return (this.luchador2.getName() + ' gana!');
    } else {
      return (this.luchador1.getName() + ' gana!');
    }
  }
  /**
   * Calcula el daño que hace un luchador al otro y viceversa.
   * Guarda esos datos en un array datoAtaque.
   */
  calcularAtaques() {
    this.datoAtaque[0] = this.calculoCombate(this.luchador1, this.luchador2);
    this.datoAtaque[1] = this.calculoCombate(this.luchador2, this.luchador1);
  }
  /**
   * Calcula el daño del ataque del pokemon 1 al pokemon 2 en funcion
   * de sus tipos y estadísticas.
   * @param tipo1 Tipo del pokemon 1
   * @param tipo2 Tipo del pokemon 2
   * @param ataque Ataque del pokemon 1
   * @param defensa Defensa del pokemon 2
   * @returns Daño inflingido del pokemon 1 al pokemon 2
   */
  calculoCombate(luch1: Fighter, luch2: Fighter): number {
    let universo1: string = luch1.getUniverso();
    let universo2: string = luch2.getUniverso();
    let ataque: number = luch1.getStats().attack;
    let defensa: number = luch2.getStats().def;
    let efectividad: number = 0; // Variable de efectividad del ataque
    if (universo1 === universo2) {
      if ((luch1 instanceof Pokemon)&&(luch2 instanceof Pokemon)) {
        let tipo1 = luch1.getType();
        let tipo2 = luch2.getType();
        if (tipo1 === tipo2) {
          efectividad = 0.5;
        } else if (tipo1 === 'Fuego') {
          switch (tipo2) {
            case 'Hierba':
              efectividad = 2;
              break;
            case 'Electrico':
              efectividad = 1;
              break;
            case 'Agua':
              efectividad = 0.5;
              break;
          }
        } else if (tipo1 === 'Agua') {
          switch (tipo2) {
            case ('Hierba'):
            case ('Electrico'):
              efectividad = 0.5;
              break;
            case 'Fuego':
              efectividad = 2;
              break;
          }
        } else if (tipo1 === 'Electrico') {
          switch (tipo2) {
            case ('Fuego'):
            case ('Hierba)'):
              efectividad = 1;
              break;
            case 'Agua':
              efectividad = 2;
              break;
          }
        } else {
          switch (tipo2) {
            case 'Electrico':
              efectividad = 1;
              break;
            case 'Agua':
              efectividad = 2;
              break;
            case 'Fuego':
              efectividad = 0.5;
              break;
          }
        }
      } else {
        efectividad = 1;
      }
    } else {
      if (universo1 == 'Pokemon') {
        switch (universo2) {
          case 'Dragon Ball':
            efectividad = 0.5;
            break;
          case 'Star Wars':
            efectividad = 1.5;
            break;
          case 'Marvel':
            efectividad = 1;
            break;
        }
      } else if (universo1 == 'Dragon Ball') {
        efectividad = 0.5;
      } else if (universo1 == 'Star Wars') {
        switch (universo2) {
          case 'Dragon Ball':
            efectividad = 0.5;
            break;
          case 'Pokemon':
            efectividad = 1;
            break;
          case 'Marvel':
            efectividad = 1;
            break;
        }
      } else if (universo1 == 'Marvel') {
        switch (universo2) {
          case 'Dragon Ball':
            efectividad = 0.5;
            break;
          case 'Pokemon':
            efectividad = 1;
            break;
          case 'Star Wars':
            efectividad = 1;
            break;
        }
      }
    }
    let damage: number = 50 * (ataque/defensa) * efectividad;
    return parseFloat(damage.toFixed(2));
  }
}
```

Y por ultimo, creamos la clase 'Fighterdex' la cual actua como una pokedex pero con los luchadores de cualquier universo.
La utilizamos como una base de datos para guardar la informacion de cada luchador

```
import {Fighter} from './fighter';
/**
 * Clase que aloja una database con luchadores
 */
export class Fighterdex {
  /**
   * Constructor de la clase
   * @param dataBase Array con los luchadores
   */
  constructor(private dataBase: Fighter[]) {};
  /**
   * Permite añadir luchadores
   * @param luchador Luchador a añadir
   */
  public addFighter(luchador: Fighter) {
    this.dataBase.push(luchador);
  }
  /**
   * Permite eliminar luchador
   * @param luchador Luchador a eliminar
   */
  public delFighter(luchador: Fighter) {
    let pos: number = -1;
    this.dataBase.forEach((iter) => {
      if (iter === luchador) {
        pos = this.dataBase.indexOf(iter);
      }
    });
    if (pos == -1) {
      console.log('Imposible eliminar. Luchador no encontrado');
    } else {
      this.dataBase.splice(pos, 1);
    }
  };
  /**
   * Tamaño de la base de datos
   * @returns size database
   */
  public fighterdexSize(): number {
    return this.dataBase.length;
  }
  /**
   * Permite buscar un luchador
   * @param luchador Luchador a buscar
   * @returns Posicion en la database. Null is no es encontrado
   */
  public buscarLuchador(luchador: Fighter) {
    let pos: number = -1;
    this.dataBase.forEach((iter) => {
      if (iter === luchador) {
        pos = this.dataBase.indexOf(iter);
      }
    });
    if (pos == -1) {
      return null;
    } else {
      return this.dataBase[pos];
    }
  }
};
```