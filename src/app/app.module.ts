import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { HttpClientModule } from '@angular/common/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FeedPageModule } from '../pages/feed/feed.module';
import { IntroPageModule } from '../pages/intro/intro.module';
import { MovieProvider } from '../providers/movie/movie';
import { UserDataProvider } from '../providers/user-data/user-data';
import { ConfiguracoesPage } from '../pages/configuracoes/configuracoes';
import { PerfilPage } from '../pages/perfil/perfil';
import { SobrePage } from '../pages/sobre/sobre';
import { ConfiguracoesPageModule } from '../pages/configuracoes/configuracoes.module';
import { SobrePageModule } from '../pages/sobre/sobre.module';
import { PerfilPageModule } from '../pages/perfil/perfil.module';
import { MovieDetailsPage } from '../pages/movie-details/movie-details';

/*Importar os novos modulos aqui (ex: feedPageModule)*/
//sempre que criar novas paginas tem de se colocar dentro dos
//declarations e entryComponents

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    ConfiguracoesPage,
    PerfilPage,
    SobrePage,
    MovieDetailsPage
  ],
  imports: [ 
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FeedPageModule, //importado
    IntroPageModule, //importado
    HttpClientModule, //importado para a API
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    ConfiguracoesPage,
    PerfilPage,
    SobrePage,
    MovieDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MovieProvider,
    UserDataProvider
  ]
})
export class AppModule {}
