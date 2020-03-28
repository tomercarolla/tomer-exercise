import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Movie} from '../../movie.model';

@Component({
  selector: 'app-modal-delete',
  templateUrl: './modal-delete.component.html',
  styleUrls: ['./modal-delete.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ModalDeleteComponent implements OnInit {

  @Input() movie: Movie;

  constructor() {
  }

  ngOnInit() {
  }

}
