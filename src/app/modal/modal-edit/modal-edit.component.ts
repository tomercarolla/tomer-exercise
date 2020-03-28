import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Movie} from '../../movie.model';
import {MovieService} from '../../movie.service';

@Component({
  selector: 'app-modal-edit',
  templateUrl: './modal-edit.component.html',
  styleUrls: ['./modal-edit.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ModalEditComponent implements OnInit {

  @Input() movieForm: FormGroup;
  @Input() movie: Movie;
  modalContext = this.movieservice.modalContext;

  constructor(private movieservice: MovieService) {
  }

  ngOnInit() {
  }

}
