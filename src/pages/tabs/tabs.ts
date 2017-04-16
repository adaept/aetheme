import { Component } from '@angular/core';

import { ThemesPage } from '../themes/themes';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ThemesPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
