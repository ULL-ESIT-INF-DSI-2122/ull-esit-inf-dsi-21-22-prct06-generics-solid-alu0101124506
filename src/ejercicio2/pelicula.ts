import {BasicStreamableCollection} from './basicstreamablecollection';
/**
 * Tipo de dato que contiene los datos de una serie
 */
export type pelicula = {
  title: string;
  year: number;
  genre: string;
  reviews: number;
}
/**
 * Clase para representar a las peliculas
 * */
export class Peliculas extends BasicStreamableCollection<pelicula> {
  /**
   * Constructor de la clase que representa peliculas
   * @param peliculas Lista de peliculas
   */
  constructor(private peliculas: pelicula[]) {
    super(peliculas);
  }
  /**
   * Getter para el array de peliculas
   * @returns Array de peliculas
   */
  getElementos() {
    return this.peliculas;
  }
  /**
   * Funcion para buscar una serie en base a un parametro
   * @param parametro Parametro a buscar: title, year, etc.
   * @param valor Valor de ese parametro
   * @returns Array con las peliculas que coinciden
   */
  buscar(parametro: string, valor: string): pelicula[] {
    let resultado: pelicula[] = [];
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