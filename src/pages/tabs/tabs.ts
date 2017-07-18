import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { TypePage} from '../type/type';
import { HomePage } from '../home/home';
import { ShoppingPage } from '../shopping/shopping';
import { MycakePage } from '../mycake/mycake';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = TypePage;
  tab3Root = ShoppingPage;
  tab4Root = MycakePage;
  tab5Root = AboutPage;

  constructor() {

  }
}
