import {BasicStreamableCollection} from './basicstreamablecollection';
/**
 * Tipo de dato que contiene los datos de una serie
 */
export type serie = {
  title: string;
  year: number;
  season: number;
  genre: string;
  reviews: number;
}
/**
 * Clase para representar a las series
 * */
export class Series extends BasicStreamableCollection<serie> {
  /**
   * Constructor de la clase que representa Series
   * @param series Lista de series
   */
  constructor(private series: serie[]) {
    super(series);
  }
  /**
   * Getter para el array de series
   * @returns Array de series
   */
  getElementos() {
    return this.series;
  }
  /**
   * Funcion para buscar una serie en base a un parametro
   * @param parametro Parametro a buscar: title, year, etc.
   * @param valor Valor de ese parametro
   * @returns Array con las series que coinciden
   */
  buscar(parametro: string, valor: string): serie[] {
    let resultado: serie[] = [];
    switch (parametro) {
      case ('title'):
        resultado = this.getElementos().filter((x) => (x.title == valor));
        break;
      case ('year'):
        resultado = this.getElementos().filter((x) => (x.year == +valor));
        break;
      case ('season'):
        resultado = this.getElementos().filter((x) => (x.season == +valor));
        break;
      case ('genre'):
        resultado = this.getElementos().filter((x) => (x.genre == valor));
        break;
      case ('reviews'):
        resultado = this.getElementos().filter((x) =>
          (x.reviews == +valor));
        break;
      default:
        console.log('Lo sentimos, no hemos encontrado nada');
    }
    return resultado;
  }
}