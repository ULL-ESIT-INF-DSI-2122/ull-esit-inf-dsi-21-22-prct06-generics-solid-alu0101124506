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