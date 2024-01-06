import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeWbPageRoutingModule } from './home-wb-routing.module';

import { HomeWbPage } from './home-wb.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    HomeWbPageRoutingModule,
  ],
  declarations: [HomeWbPage],
})
export class HomeWbPageModule {}
