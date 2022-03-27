import {BasicStreamableCollection} from './basicstreamablecollection';
/**
 * Tipo de dato que contiene los datos de una serie
 */
export type documental = {
  title: string;
  year: number;
  genre: string;
  duration: number;
}
/**
 * Clase para representar a las documentales
 * */
export class Documentales extends BasicStreamableCollection<documental> {
  /**
   * Constructor de la clase que representa documentales
   * @param documentales Lista de documentales
   */
  constructor(private documentales: documental[]) {
    super(documentales);
  }
  /**
   * Getter para el array de documentales
   * @returns Array de documentales
   */
  getElementos() {
    return this.documentales;
  }
  /**
   * Funcion para buscar una serie en base a un parametro
   * @param parametro Parametro a buscar: title, year, etc.
   * @param valor Valor de ese parametro
   * @returns Array con las documentales que coinciden
   */
  buscar(parametro: string, valor: string): documental[] {
    let resultado: documental[] = [];
    switch (parametro) {
      case ('title'):
        resultado = this.getElementos().filter((x) => (x.title == valor));
        break;
      case ('year'):
        resultado = this.getElementos().filter((x) => (x.year == +valor));
        break;
      case ('genre'):
        resultado = this.getElementos().filter((x) => (x.genre == valor));
        break;
      case ('duration'):
        resultado = this.getElementos().filter((x) =>
          (x.duration == +valor));
        break;
      default:
        console.log('Lo sentimos, no hemos encontrado nada');
    }
    return resultado;
  }
}