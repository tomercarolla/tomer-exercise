import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

import {ModalComponent} from '../../modal/modal.component';
import {Movie} from '../../movie.model';
import {MovieService} from '../../movie.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

  @ViewChild(ModalComponent) modalComponent;
  isActiveModal = this.movieservice.isActiveModal;
  movies: Movie[] = [];

  constructor(private movieservice: MovieService) { }

  openEditDialog(movie) {
    this.movieservice.openModal('edit');
    this.movieservice.setActiveMovie(movie);
  }

  openDeleteDialog(movie) {
    this.movieservice.openModal('delete');
    this.movieservice.setActiveMovie(movie);
  }

  ngOnInit() {
    const movieObservable = this.movieservice.getMovies();
    movieObservable.subscribe((moviesData: Movie[]) => {
      this.movies = moviesData;
    });
  }

}
