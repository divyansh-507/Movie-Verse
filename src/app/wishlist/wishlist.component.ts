import { Component } from '@angular/core';
import { MovieList } from '../MovieList';
import { MovieListService } from '../Service/movie-list.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent {

movieArr : MovieList[] = [];

  constructor(private movieService :MovieListService){}

  // get all empployees
  displayMovies(){
    this.movieArr = this.movieService.getAllMovieList();
  }

  // insertEmployee(){
  //   let empObj : Employee = new Employee(102, "Manaswi", "IT", "Full Stack Developer" );
  //   this.restService.insertRecord(empObj).subscribe({
  //     next : (data) => {console.log(data);this.getAllEmployeeData();},

  //     error : (err) => console.log(err),
  //   })
  // }

  
  inputForm : boolean = false;
  movieObj !: MovieList;
  index = 0;
  
  onEdit(movieId : number){
    for(let movie of this.movieArr){
      if(movie.movieId == movieId)
        this.movieObj = movie;
    }

    this.index = this.movieArr.indexOf(this.movieObj);
    this.inputForm = true;
  }
  onSave(){
    this.inputForm = false;
  }

  // delete a Movie Record
  onDelete(id : number){
    this.movieArr = this.movieArr.filter((value) =>{
      return value.movieId != id
    });
  }

}