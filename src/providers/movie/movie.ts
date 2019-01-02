import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Acessando a API
*/
@Injectable()//classe que pode ser injetada em varios lugares do programa
export class MovieProvider {
  basicPath = "https://api.themoviedb.org/3";
  constructor(public http: HttpClient) {
    console.log('Hello MoovieProvider Provider');
  }

  public getLatestMovies(){
    return this.http.get(this.basicPath+"/movie/latest"+this.getApiKey());
  }

  public getApiKey() : string{
    return "?api_key=c905839a8ab34d6e636b1800218fefc6";
  }
  //usando crase n precisa concatenar usando +
  //ele vai mudar a string de acordo com o id do filme
  public getMovieById(id){
    return this.http.get(this.basicPath+`/movie/${id}popular`+this.getApiKey());
  }
  public getPopularMovies(){
    return this.http.get(this.basicPath+"/movie/popular"+this.getApiKey());
  }

}
