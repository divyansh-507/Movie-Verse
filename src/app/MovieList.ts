export class MovieList{
    movieId! : number;
    movieName! : string;
    movieGenre! : string;
    ratings! : number;

    constructor(movieId: number,movieName : string,moviegenre : string,ratings : number){
        this.movieId = movieId;
        this.movieName = movieName;
        this.movieGenre = moviegenre;
        this.ratings = ratings;
    }
}