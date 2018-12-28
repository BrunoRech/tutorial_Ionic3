import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers:[MovieProvider]
})
export class FeedPage {/*Manda a classe feed (p/ exemplo na tabs.ts) */
  public loader;
  public movieList = new Array<any>();
  public refresher;
  public isRefreshing: boolean = false;
  public feed = {//JSON
    title: "Erik Von-Strawssen",
    date:"December 5, 1655",
    description:"Esse tutorial e muito bom",
    qt_likes:12,
    qt_comments: 101,
    comment_age: "11h ago"
  }
  public userName = "Erik Von-Strawssen";exemplo

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     private movieProv: MovieProvider,
     public loadingCtrl: LoadingController) {//injetando o provider aqui
  }

  doRefresh(refresher){
    this.refresher = refresher;
    this.isRefreshing = true;
    this.carregarFilmes();
  }

  openLoading() {//animacao do loading
    this.loader = this.loadingCtrl.create({
      content: "Carregando filmes...",
    });
    this.loader.present();
  }
  closeLoading(){
    this.loader.dismiss();
  }
  carregarFilmes(){
     this.openLoading();
    this.movieProv.getPopularMovies().subscribe(data=>{
      console.log(data);
      this.movieList = (data as any).results;
      this.closeLoading();
      if(this.isRefreshing){
        this.refresher.complete();
        this.isRefreshing = false;
      }
    },
    error => {
      console.log(error);
      this.closeLoading();
    }
    )
  
  }
  ionViewDidEnter() {//toda vez que o usuario entrar na pag
    this.carregarFilmes();
  }

}
