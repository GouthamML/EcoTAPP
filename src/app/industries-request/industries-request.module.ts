import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { IndustriesRequestPage } from './industries-request.page';

const routes: Routes = [
  {
    path: '',
    component: IndustriesRequestPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [IndustriesRequestPage]
})
export class IndustriesRequestPageModule {}
