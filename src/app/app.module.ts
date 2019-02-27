import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { MovieCardComponent } from './home/movie-card/movie-card.component';
import { ModalComponent } from './modal/modal.component';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ModalEditComponent } from './modal/modal-edit/modal-edit.component';
import { ModalDeleteComponent } from './modal/modal-delete/modal-delete.component';
import {HttpClientModule} from '@angular/common/http';
import { TitlePipePipe } from './title-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    MovieCardComponent,
    ModalComponent,
    ModalEditComponent,
    ModalDeleteComponent,
    TitlePipePipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
