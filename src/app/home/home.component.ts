import { Component, OnInit } from '@angular/core';
import {MovieCardComponent} from './movie-card/movie-card.component';
import {MovieService} from '../movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private movieservice: MovieService) { }

  ngOnInit() {
  }

  openAddMovieDialog() {
    this.movieservice.openModal('add');
  }
}
