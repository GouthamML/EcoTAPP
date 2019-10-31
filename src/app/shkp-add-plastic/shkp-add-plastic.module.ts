import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ShkpAddPlasticPage } from './shkp-add-plastic.page';

const routes: Routes = [
  {
    path: '',
    component: ShkpAddPlasticPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ShkpAddPlasticPage]
})
export class ShkpAddPlasticPageModule {}
