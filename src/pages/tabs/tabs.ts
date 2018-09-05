import { Component } from '@angular/core';
import { AddHerfaPage } from '../add-herfa/add-herfa';
import { AddTownPage } from '../add-town/add-town';
import { AddWorkerPage } from '../add-worker/add-worker';



@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = AddHerfaPage;
  tab2Root = AddTownPage;
  tab3Root = AddWorkerPage;

  constructor() {

  }
}
