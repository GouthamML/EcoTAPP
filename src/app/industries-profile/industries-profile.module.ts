import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { IndustriesProfilePage } from './industries-profile.page';

const routes: Routes = [
  {
    path: '',
    component: IndustriesProfilePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [IndustriesProfilePage]
})
export class IndustriesProfilePageModule {}
