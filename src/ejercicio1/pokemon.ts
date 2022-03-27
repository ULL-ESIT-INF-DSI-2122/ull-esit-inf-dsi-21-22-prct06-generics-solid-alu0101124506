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