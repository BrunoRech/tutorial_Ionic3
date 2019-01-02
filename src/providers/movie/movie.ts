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
  //se nao mandar a pag pro metodo, o defaut vai ser a pag 1
  public getLatestMovies(page = 1){
    //o '&' separa as 2 variaveis
    return this.http.get(this.basicPath+`/movie/latest?page=${page}&api_key=`+this.getApiKey());
  }

  public getApiKey() : string{
    return "c905839a8ab34d6e636b1800218fefc6";
  }
  //usando crase n precisa concatenar usando +
  //ele vai mudar a string de acordo com o id do filme
  public getMovieById(id){
    return this.http.get(this.basicPath+`/movie/${id}popular?api_key=`+this.getApiKey());
  }
  public getPopularMovies(page = 1){
    return this.http.get(this.basicPath+`/movie/popular?page=${page}&api_key=`+this.getApiKey());
  }

}
