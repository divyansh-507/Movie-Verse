import { Injectable } from '@angular/core';
import { MovieList } from '../MovieList';

@Injectable({
  providedIn: 'root'
})
export class MovieListService {

  movieArr : MovieList[] = [
    {movieId : 101, movieName: "Black Adam",movieGenre: "Action, Adventure" ,ratings: 7.8},
    {movieId : 102, movieName: "Jab We Met",movieGenre: "Comdedy, Romance" ,ratings: 8.2},
    {movieId : 103, movieName: "3 Idiots",movieGenre: "Comedy, Romance, Drama" ,ratings: 9.4},
    {movieId : 104, movieName: "War",movieGenre: "Action, Thriller" ,ratings: 8.0},
    
  ]
  constructor() { }

  getAllMovieList(){
    return this.movieArr;
  }
}
