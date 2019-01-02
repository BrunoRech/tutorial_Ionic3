import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';
import { MovieDetailsPage } from '../movie-details/movie-details';

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
  public page = 1;
  public feed = {//JSON
    title: "Erik Von-Strawssen",
    date:"December 5, 1655",
    description:"Esse tutorial e muito bom",
    qt_likes:12,
    qt_comments: 101,
    comment_age: "11h ago"
  }
  public userName = "Erik Von-Strawssen";exemplo
  public infiniteScroll;

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
  abrirDetalhes(filme){
    console.log(filme);
    console.log("filme ok");
    //push joga a pag detalhes na view
    this.navCtrl.push(MovieDetailsPage,{id: filme.id});
    
  }
  closeLoading(){
    this.loader.dismiss();
  }
  carregarFilmes(newPage : boolean = false){
     this.openLoading();
    this.movieProv.getPopularMovies(this.page).subscribe(data=>{
      console.log(data);
      

      if(newPage){//se for uma nova pag, adiciona os novos filmes aos antigos
        console.log("nova pag");
        this.movieList = this.movieList.concat((data as any).results);
        this.infiniteScroll.complete();//fechar o infinity scroll
      }else{//se nao, sobreescreve tudo com os novos
        this.movieList = (data as any).results;
        console.log("primeira pag");
      }

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

  doInfinite(infiniteScroll) {
    this.page++;
    this.infiniteScroll = infiniteScroll;
    this.carregarFilmes(true);
    console.log('Begin async operation');
  }

  ionViewDidEnter() {//toda vez que o usuario entrar na pag
    this.carregarFilmes();
  }

}
