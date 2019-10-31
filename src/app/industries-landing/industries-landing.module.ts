import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { IndustriesLandingPage } from './industries-landing.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'industries-landing/industries-request',
    pathMatch: 'full'
  },
  {
    path: '',
    component: IndustriesLandingPage,
    children: [
      { path: 'industries-request', loadChildren: '../industries-request/industries-request.module#IndustriesRequestPageModule' },
      { path: 'industries-profile', loadChildren: '../industries-profile/industries-profile.module#IndustriesProfilePageModule' },
      { path: 'shkp-logistics', loadChildren: '../shkp-logistics/shkp-logistics.module#ShkpLogisticsPageModule' },
      { path: 'shkp-order-in-progress', loadChildren: '../shkp-order-in-progress/shkp-order-in-progress.module#ShkpOrderInProgressPageModule' },
      { path: 'shkp-order-completed', loadChildren: '../shkp-order-completed/shkp-order-completed.module#ShkpOrderCompletedPageModule' }
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
  declarations: [IndustriesLandingPage]
})
export class IndustriesLandingPageModule {}
