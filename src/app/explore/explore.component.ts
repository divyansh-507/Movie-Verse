import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { Movie, ResultsEntity } from '../Model/movie';
import { DataService } from '../Service/data.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit{
  latestMovie : any;
  popularMovies !: Movie;
  nowPlayingMovies !: Movie;
  topRatedMovies !: Movie;
  upcomingMovies !: Movie;
  trendingMovies !: Movie;
  originalsMovies !: Movie;
  genres !: Map<number, string>;

  constructor(private dataService : DataService){}

  ngOnInit(): void{
    this.initializeGenres();
    this.getLatestMovie();
    this.getNowPlayingMovies();
    this.getPopularMovies();
    this.getTrendingMovies();
    this.getTopRatedMovies();
    this.getUpcomingMovies();
    this.getOriginals();
  }

  // genreUrl: string = 'https://api.themoviedb.org/3/genre/tv/list?api_key=d6413c050a2b93056fe115eba3239453';

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

  displayDetails(movie: ResultsEntity){
    AppComponent.movieToDisplay = movie;
  }

  getLatestMovie(){
    this.dataService.getLatestMovie().subscribe(
      res => {
        this.checkData(res);
        this.latestMovie = res;
        console.log(this.latestMovie?.backdrop_path);
      }, err => {
        console.log("Oops! Failed to get latest Movie.", err);
      }
    )
  }

  checkData(res: any) : any{
    if(!res.backdrop_path){
      res.backdrop_path = 'https://image.tmdb/org/t/p/original'+res.poster_path+'?api_key='+DataService.api_key;
    }else{
      res.backdrop_path = 'https://image.tmdb/org/t/p/original'+res.backdrop_path+'?api_key='+DataService.api_key;
    }
  }

  getNowPlayingMovies(){
    this.dataService.getNowPlayingMovies().subscribe(
      res => {
        this.nowPlayingMovies = this.modifyData(res);
      }, err => {
        console.log("Failed to fetch Now Playing Movies.", err);
      }
    )
  }

  getTrendingMovies(){
    this.dataService.getTrendingMovies().subscribe(
      res => {
        this.trendingMovies = this.modifyData(res);
      }, err => {
        console.log("Failed to fetch Trending Movies.", err);
      }
    )
  }

  getPopularMovies(){
    this.dataService.getPopularMovies().subscribe(
      res => {
        this.popularMovies = this.modifyData(res);
        console.log("HI this is the Popular : "+this.popularMovies);
      }, err => {
        console.log("Failed to fetch Popular Movies.", err);
      }
    )
  }

  getTopRatedMovies(){
    this.dataService.getTopRatedMovies().subscribe(
      res => {
        this.topRatedMovies = this.modifyData(res);
      }, err => {
        console.log("Failed to fetch Top-Rated Movies.", err);
      }
    )
  }

  getUpcomingMovies(){
    this.dataService.getUpcomingMovies().subscribe(
      res => {
        this.upcomingMovies = this.modifyData(res);
      }, err => {
        console.log("Failed to fetch Upcoming Movies.", err);
      }
    )
  }

  getOriginals(){
    this.dataService.getOriginals().subscribe(
      res => {
        this.originalsMovies = this.modifyData(res);
      }, err => {
        console.log("Failed to fetch originals.", err);
      }
    )
  }

  modifyData(movies: Movie) : Movie{
    if(movies.results){
      movies.results.forEach(element =>{
        element.backdrop_path = 'https://image.tmdb.org/t/p/original'+element.backdrop_path+'?api_key='+DataService.api_key;
        element.poster_path = 'https://image.tmdb.org/t/p/original'+element.poster_path+'?api_key='+DataService.api_key;

        if(!element.title){
          element.title = element?.name;
        }
      })
    }
    return movies;
  }

}
