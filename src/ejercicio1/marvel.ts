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