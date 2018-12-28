import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
})
export class FeedPage {/*Manda a classe feed (p/ exemplo na tabs.ts) */
  
  public feed = {//JSON
    title: "Erik Von-Strawssen",
    date:"December 5, 1655",
    description:"Esse tutorial e muito bom",
    qt_likes:12,
    qt_comments: 101,
    comment_age: "11h ago"
  }
  public userName = "Erik Von-Strawssen";exemplo

  public waring(): any{//teste
    alert("Opa, suave?");
  }
  



  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedPage');
  }

}
