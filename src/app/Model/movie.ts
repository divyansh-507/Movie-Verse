export interface Movie {
    dates : Dates;
    page:number;
    results?: (ResultsEntity)[] | null;
    total_pages: number;
    total_results: number;
}

export interface Dates{
    maximum: string;
    minimum: string;
}

export interface ResultsEntity{
    name: string;
    adult: boolean;
    backdrop_path: string;
    genre_ids?: (number)[] | null;
    genre_names?:(string)[] | null;
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}
