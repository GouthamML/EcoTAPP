import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'landing-individual', loadChildren: './landing-individual/landing-individual.module#LandingIndividualPageModule' },
  { path: 'shop-kpr-landing', loadChildren: './shop-kpr-landing/shop-kpr-landing.module#ShopKprLandingPageModule' },
  { path: 'industries-landing', loadChildren: './industries-landing/industries-landing.module#IndustriesLandingPageModule' },
  { path: 'modal-page', loadChildren: './modal-page/modal-page.module#ModalPagePageModule' },
  { path: 'logistics-lading', loadChildren: './logistics-lading/logistics-lading.module#LogisticsLadingPageModule' },
  // { path: 'drops', loadChildren: './drops/drops.module#DropsPageModule' },
  // { path: 'pickups', loadChildren: './pickups/pickups.module#PickupsPageModule' },
  // { path: 'industries-request', loadChildren: './industries-request/industries-request.module#IndustriesRequestPageModule' },
  // { path: 'industries-profile', loadChildren: './industries-profile/industries-profile.module#IndustriesProfilePageModule' },
  // { path: 'shkp-price', loadChildren: './shkp-price/shkp-price.module#ShkpPricePageModule' },
  // { path: 'shkp-logistics', loadChildren: './shkp-logistics/shkp-logistics.module#ShkpLogisticsPageModule' },
  // { path: 'shkp-order-in-progress', loadChildren: './shkp-order-in-progress/shkp-order-in-progress.module#ShkpOrderInProgressPageModule' },
  // { path: 'shkp-order-completed', loadChildren: './shkp-order-completed/shkp-order-completed.module#ShkpOrderCompletedPageModule' },
  // { path: 'shkp-add-plastic', loadChildren: './shkp-add-plastic/shkp-add-plastic.module#ShkpAddPlasticPageModule' },
  // { path: 'shkp-profile', loadChildren: './shkp-profile/shkp-profile.module#ShkpProfilePageModule' }
  // { path: 'indi-profile', loadChildren: './indi-profile/indi-profile.module#IndiProfilePageModule' },
  // { path: 'locate-stores', loadChildren: './locate-stores/locate-stores.module#LocateStoresPageModule' }
  // { path: 'report', loadChildren: './report/report.module#ReportPageModule' },
  // { path: 'redeem', loadChildren: './redeem/redeem.module#RedeemPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
