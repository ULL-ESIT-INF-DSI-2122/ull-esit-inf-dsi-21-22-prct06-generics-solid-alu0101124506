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