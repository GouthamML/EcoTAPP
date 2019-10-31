import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ShkpOrderInProgressPage } from './shkp-order-in-progress.page';

const routes: Routes = [
  {
    path: '',
    component: ShkpOrderInProgressPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ShkpOrderInProgressPage]
})
export class ShkpOrderInProgressPageModule {}
