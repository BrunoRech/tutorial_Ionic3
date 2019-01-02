import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

/**
 * Generated class for the MovieDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-movie-details',
  templateUrl: 'movie-details.html',
  providers:[MovieProvider]
})
export class MovieDetailsPage {
  public filmeId;
  public filme;
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public movProv: MovieProvider) {
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter MovieDetailsPage');
    //func .get pega todos os parametros(pelo atributo) que foram enviados para a pag
    //nesse caso foi enviado o id do filme p essa pag
    this.filmeId = this.navParams.get("id");
    //resposta da web
    this.movProv.getMovieById(this.filmeId).subscribe(
      data =>{//func .get pega todos pelos parametros
        let retorno = (data as any);
        this.filme = retorno;
      }, error =>{

      }
    )
  }

}
