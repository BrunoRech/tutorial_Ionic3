import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { C } from '@angular/core/src/render3';
import { FeedPage } from '../feed/feed';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  /*Novas tabs colocam aqui*/
  tab4Root = FeedPage;
  constructor() {

  }
}
