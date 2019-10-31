import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LandingIndividualPage } from './landing-individual.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'landing-individual/locate-stores',
    pathMatch: 'full'
  },
  {
    path: '',
    component: LandingIndividualPage,
    children: [
      { path: 'report', loadChildren: '../report/report.module#ReportPageModule' },
      { path: 'redeem', loadChildren: '../redeem/redeem.module#RedeemPageModule' },
      { path: 'locate-stores', loadChildren: '../locate-stores/locate-stores.module#LocateStoresPageModule' },
      { path: 'indi-profile', loadChildren: '../indi-profile/indi-profile.module#IndiProfilePageModule' }
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
  declarations: [LandingIndividualPage]
})
export class LandingIndividualPageModule { }
