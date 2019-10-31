import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ShopKprLandingPage } from './shop-kpr-landing.page';

const routes: Routes = [
  {
    path: '',
    component: ShopKprLandingPage,
    children: [
      { path: 'shkp-add-plastic', loadChildren: '../shkp-add-plastic/shkp-add-plastic.module#ShkpAddPlasticPageModule' },
      { path: 'shkp-profile', loadChildren: '../shkp-profile/shkp-profile.module#ShkpProfilePageModule' },
      { path: 'shkp-logistics', loadChildren: '../shkp-logistics/shkp-logistics.module#ShkpLogisticsPageModule' },
      { path: 'shkp-order-in-progress', loadChildren: '../shkp-order-in-progress/shkp-order-in-progress.module#ShkpOrderInProgressPageModule' },
      { path: 'shkp-order-completed', loadChildren: '../shkp-order-completed/shkp-order-completed.module#ShkpOrderCompletedPageModule' },
      { path: 'shkp-price', loadChildren: '../shkp-price/shkp-price.module#ShkpPricePageModule' }
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
  declarations: [ShopKprLandingPage]
})
export class ShopKprLandingPageModule { }
