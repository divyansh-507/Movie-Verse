import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../Model/movie';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  url:string = 'https://api.themoviedb.org/3';
  static api_key: string = 'd6413c050a2b93056fe115eba3239453';


  constructor(private http : HttpClient) { }

  //https://api.themoviedb.org/3/movie/latest?api_key=d6413c050a2b93056fe115eba3239453
  
  //get latest movie
  getLatestMovie() : Observable<any>{
    return this.http.get<Movie> (this.url+'/movie/latest?api_key='+DataService.api_key);
  }

  //get popular movies
  getPopularMovies() : Observable<Movie>{
    return this.http.get<Movie> (this.url+'/movie/popular?api_key='+DataService.api_key);
  }

  //get now playing movies
  getNowPlayingMovies() : Observable<Movie>{
    return this.http.get<Movie> (this.url+'/movie/now_playing?api_key='+DataService.api_key);
  }
  //get Top Rated movies
  getTopRatedMovies() : Observable<Movie>{
    return this.http.get<Movie> (this.url+'/movie/top_rated?api_key='+DataService.api_key);
  }

  //get Treding movies
  getTrendingMovies() : Observable<Movie>{
    return this.http.get<Movie> (this.url+'/trending/all/week?api_key='+DataService.api_key);
  }


  //get Upcoming Movies
  getUpcomingMovies() : Observable<Movie>{
    return this.http.get<any> (this.url+'/movie/upcoming?api_key='+DataService.api_key);
  }
  //get Original Shows
  getOriginals() : Observable<Movie>{
    return this.http.get<any> (this.url+'/discover/tv?api_key='+DataService.api_key);
  }

}
