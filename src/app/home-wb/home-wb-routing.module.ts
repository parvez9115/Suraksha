import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeWbPage } from './home-wb.page';

const routes: Routes = [
  {
    path: '',
    component: HomeWbPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeWbPageRoutingModule {}
