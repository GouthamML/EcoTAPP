import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LogisticsLadingPage } from './logistics-lading.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'logistics-lading/pickups',
    pathMatch: 'full'
  },
  {
    path: '',
    component: LogisticsLadingPage,
    children: [
      { path: 'pickups', loadChildren: '../pickups/pickups.module#PickupsPageModule' },
      { path: 'drops', loadChildren: '../drops/drops.module#DropsPageModule' },
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LogisticsLadingPage]
})
export class LogisticsLadingPageModule {}
