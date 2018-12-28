import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { C } from '@angular/core/src/render3';
import { FeedPage } from '../feed/feed';
import { PerfilPage } from '../perfil/perfil';
import { SobrePage } from '../sobre/sobre';
import { ConfiguracoesPage } from '../configuracoes/configuracoes';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  /*Novas tabs colocam aqui*/
  tab4Root = FeedPage;
  tab5Root = ConfiguracoesPage;

  constructor() {

  }
}
