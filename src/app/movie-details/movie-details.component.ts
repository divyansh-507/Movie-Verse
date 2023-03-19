import { Component, OnInit} from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit{
  movie = AppComponent.movieToDisplay;
  genres !: Map<number, string>;

  ngOnInit(): void{
    this.initializeGenres();
  }

  initializeGenres(){
    this.genres = new Map([
     [12, 'Adventure'],
     [28, 'Action'],
     [16, 'Animation'],
     [35, 'Comedy'],
     [80, 'Crime'],
     [99, 'Documentory'],
     [18, 'Drama'],
     [10751, 'Family'],
     [14, 'Fantasy'],
     [36, 'History'],
     [27, 'Horror'],
     [10402, 'Music'],
     [9648, 'Mystery'],
     [10749, 'Romance'],
     [878, 'Science Fiction'],
     [53, 'Thriller'],
     [10752, 'War'],
     [37, 'Western'],
   ]);
 }
}
