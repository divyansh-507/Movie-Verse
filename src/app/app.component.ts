import { Component } from '@angular/core';
import { Movie, ResultsEntity } from './Model/movie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MovieVerse';

  static movieToDisplay : ResultsEntity;
}
