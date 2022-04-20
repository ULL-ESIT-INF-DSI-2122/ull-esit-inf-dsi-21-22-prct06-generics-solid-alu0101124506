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