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