import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {MovieService, generateId} from '../movie.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ModalComponent implements OnInit {

  activeMovie = this.movieservice.activeMovie;
  modalContext = this.movieservice.modalContext;

  movieForm: FormGroup = new FormGroup({});

  constructor(private movieservice: MovieService, private fBuilder: FormBuilder) {
  }

  hideModal() {
    this.movieservice.hideModal();
  }

  ngOnInit() {
    const context = this.modalContext.getValue();
    if (context === 'edit') {
      this.movieForm = this.fBuilder.group(this.activeMovie.getValue(), Validators.required);
    } else if (context === 'add') {
      this.movieForm = this.fBuilder.group({
        id: generateId(),
        title: ['', Validators.required],
        year: ['', Validators.required],
        runtime: ['', Validators.required],
        genre: ['', Validators.required],
        director: ['', Validators.required],
      });
    }
  }

  addMovie() {
    const newMovie = this.movieForm.getRawValue();
    this.movieservice.addNewMovie(newMovie);
    this.hideModal();
  }

  saveEdit() {
    const updatedMovie = this.movieForm.getRawValue();
    this.movieservice.updateMovie(updatedMovie);
    this.hideModal();
  }

  deleteMovie() {
    const deleteCurrentMovie = this.activeMovie.getValue();
    this.movieservice.deleteMovie(deleteCurrentMovie);
    this.hideModal();
  }
}
