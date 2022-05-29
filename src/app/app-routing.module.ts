import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { SellerLayoutComponent } from './pages/layout/seller-layout/seller-layout.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupProfComponent } from './pages/signup-prof/signup-prof.component';
import { SignupComponent } from './pages/signup/signup.component';

const routes: Routes = [
 
  {
    path: '',
    component:LayoutComponent,
    children:[
      {
        path:'',
        loadChildren: () => import('./pages/buyer/buyer.module').then( m => m.BuyerModule)
      }

    ],
  },
  {
    path: 'landing',
    component:LandingComponent
  },
  {
    path: 'signup',
    component:SignupComponent
  },
  {
    path: 'signup_pro',
    component:SignupProfComponent
  },
  {
    path: 'login',
    component:LoginComponent
  },
  {
    path: 'seller',
    component:SellerLayoutComponent,
    loadChildren: () => import('./pages/seller/seller/seller.module').then( m => m.SellerModule)
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
