import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { IntroPage } from '../pages/intro/intro';
import { UserDataProvider } from '../providers/user-data/user-data';
import { TabsPage } from '../pages/tabs/tabs';

//app.components.ts define a primeira pagina que vai rodar no aplic

@Component({
  templateUrl: 'app.html',
  providers:[UserDataProvider]
})
export class MyApp {
  rootPage:any = IntroPage;//aqui e a primeira pag

  constructor(platform: Platform, statusBar: StatusBar, 
    splashScreen: SplashScreen, userDataProv:UserDataProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      
      const config = userDataProv.getUserData();
      if(config == null){//se for nulo abrir a pag de slides
        userDataProv.setUserData(false);
      }else{
        this.rootPage = TabsPage;//se n vai direto p home
      }
      console.log(config);
      
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
