import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ShkpOrderCompletedPage } from './shkp-order-completed.page';

const routes: Routes = [
  {
    path: '',
    component: ShkpOrderCompletedPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ShkpOrderCompletedPage]
})
export class ShkpOrderCompletedPageModule {}
