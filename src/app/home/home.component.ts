import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {MovieService} from '../movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  constructor(private movieservice: MovieService) {
  }

  ngOnInit() {
  }

  openAddMovieDialog() {
    this.movieservice.openModal('add');
  }
}
