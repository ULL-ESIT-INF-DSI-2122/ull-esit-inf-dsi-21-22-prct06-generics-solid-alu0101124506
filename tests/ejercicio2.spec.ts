import 'mocha';
import {expect} from 'chai';
import {Documentales} from '../src/ejercicio2/documental';
import {Peliculas} from '../src/ejercicio2/pelicula';
import {Series} from '../src/ejercicio2/serie';

let newShow = {title: 'Legends of Tomorrow', year: 2016, season: 7, genre: 'Accion', reviews: 6.9};
let listaSeries = new Series([{title: 'La Casa de Papel', year: 2017, season: 5, genre: 'Crimen', reviews: 8.3}, newShow]);
let listaDocumental = new Documentales([{title: 'El Gran Hackeo', year: 2019, genre: 'Tecnologia', duration: 113}]);
let listaPeliculas = new Peliculas([{title: 'Constantine', year: 2005, genre: 'Fantasia', reviews: 7.0}]);
let newMovie = {title: 'Avengers: Endgame', year: 2019, genre: 'Drama', reviews: 8.4};

describe('Comprobamos las clases del ejercicio 3', () => {

  it('Se puede añadir una pelicula nueva', () => {
    listaPeliculas.addElement(newMovie);
    expect(listaPeliculas.getElementos().length).to.be.equal(2);
  });

  it('Se puede buscar la nueva pelicula añadida por nombre', () => {
    expect(listaPeliculas.buscar('title', 'Avengers: Endgame')).to.deep.
        equal([newMovie]);
  });

  it('Se puede buscar una pelicula por year', () => {
    expect(listaPeliculas.buscar('year', '2005')).to.deep.
        equal([{title: 'Constantine', year: 2005, genre: 'Fantasia',
          reviews: 7.0}]);
  });

  it('Se puede buscar una pelicula por reviews', () => {
    expect(listaPeliculas.buscar('reviews', '7.0')).to.deep.
        equal([{title: 'Constantine', year: 2005, genre: 'Fantasia',
          reviews: 7.0}]);
  });

  it('Se puede buscar una pelicula por genre', () => {
    expect(listaPeliculas.buscar('genre', 'Fantasia')).to.deep.
        equal([{title: 'Constantine', year: 2005, genre: 'Fantasia',
          reviews: 7.0}]);
  });

  it('Si no se encuentra nada se devuelve vacio', () => {
    expect(listaPeliculas.buscar('dinero', 'accion')).to.deep.
        equal([]);
  });

  it('Se puede buscar una serie por nombre', () => {
    expect(listaSeries.buscar('title', 'Legends of Tomorrow')).to.deep.
        equal([newShow]);
  });

  it('Se puede buscar una serie por genre', () => {
    expect(listaSeries.buscar('genre', 'Crimen').length).to.be.
        equal(1);
  });

  it('Se puede buscar una serie por year', () => {
    expect(listaSeries.buscar('year', '2016')).to.deep.
        equal([newShow]);
  });

  it('Se puede buscar una serie por numero de season', () => {
    expect(listaSeries.buscar('season', '5')).to.deep.
        equal([{title: 'La Casa de Papel', year: 2017, season: 5, genre: 'Crimen', reviews: 8.3}]);
  });

  it('Se puede buscar una serie por reviews', () => {
    expect(listaSeries.buscar('reviews', '8.3')).to.deep.
        equal([{title: 'La Casa de Papel', year: 2017, season: 5, genre: 'Crimen', reviews: 8.3}]);
  });

  it('Se puede buscar un documental por duration', () => {
    expect(listaDocumental.buscar('duration', '113')).to.deep.
        equal([{title: 'El Gran Hackeo', year: 2019, genre: 'Tecnologia',
          duration: 113}]);
  });

  it('Se puede buscar un documental por fecha', () => {
    expect(listaDocumental.buscar('year', '2019')).to.deep.
        equal([{title: 'El Gran Hackeo', year: 2019, genre: 'Tecnologia',
          duration: 113}]);
  });

  it('Se puede buscar un documental por genre', () => {
    expect(listaDocumental.buscar('genre', 'Tecnologia')).to.deep.
        equal([{title: 'El Gran Hackeo', year: 2019, genre: 'Tecnologia',
          duration: 113}]);
  });

  it('Se puede buscar un documental por nombre', () => {
    expect(listaDocumental.buscar('title', 'El Gran Hackeo')).to.deep.
        equal([{title: 'El Gran Hackeo', year: 2019, genre: 'Tecnologia',
          duration: 113}]);
  });
});