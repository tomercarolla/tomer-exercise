import {Injectable} from '@angular/core';
import {Movie} from './movie.model';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  apiURL: string = 'http://www.omdbapi.com/?i=tt3896198&apikey=22437911';

  movies: Movie[] = [
    {
      id: generateId(),
      title: 'Guardians of the Galaxy Vol 2',
      year: 2017,
      runtime: '136 min',
      genre: 'Action, Adventure, Comedy, Sci-Fi',
      director: 'James Gunn'
    },
    {
      id: generateId(),
      title: 'Matrix',
      year: 2007,
      runtime: '126 min',
      genre: 'Action',
      director: 'James Gunn'
    },
    {
      id: generateId(),
      title: 'Guardians',
      year: 2019,
      runtime: '16 min',
      genre: 'Adventure',
      director: 'James Gunn'
    },
    {
      id: generateId(),
      title: 'Guardians',
      year: 2019,
      runtime: '16 min',
      genre: 'Adventure',
      director: 'James Gunn'
    },
    {
      id: generateId(),
      title: 'Guardians',
      year: 2019,
      runtime: '16 min',
      genre: 'Adventure',
      director: 'James Gunn'
    },
    {
      id: generateId(),
      title: 'Guardians',
      year: 2019,
      runtime: '16 min',
      genre: 'Adventure',
      director: 'James Gunn'
    },
    {
      id: generateId(),
      title: 'Guardians',
      year: 2019,
      runtime: '16 min',
      genre: 'Adventure',
      director: 'James Gunn'
    }
  ];

  activeMovie = new BehaviorSubject<Movie>(null);
  isActiveModal = new BehaviorSubject<boolean>(null);
  modalContext = new BehaviorSubject< 'add' | 'edit' | 'delete'>(null);

  constructor(private httpClient: HttpClient) {
  }

  setActiveMovie(movie) {
    this.activeMovie.next(movie);
  }

  openModal(context: 'add' | 'edit' | 'delete') {
    this.isActiveModal.next(true);
    this.modalContext.next(context);
  }

  hideModal() {
    this.isActiveModal.next(false);
  }

  getMovies(): any {
    const moviesObservable = new Observable(observer => {
      setTimeout(() => {
        observer.next(this.movies);
      }, 1000);
    });
    return moviesObservable;
  }

  addNewMovie(updateMovieList) {
    const newMovie = updateMovieList;
    this.movies.push(newMovie);
  }

  updateMovie(updatedMovie: Movie) {
    const currentMovieIndex = this.movies.findIndex(movie => movie.id === updatedMovie.id);
    this.movies[currentMovieIndex] = updatedMovie;
  }

  deleteMovie(currentMovie: Movie) {
    const currentMovieIndex = this.movies.findIndex(movie => movie.id === currentMovie.id);
    this.movies.splice(currentMovieIndex, 1);
  }
}

let idMovie = 1;

export function generateId() {
  return idMovie++;
}
