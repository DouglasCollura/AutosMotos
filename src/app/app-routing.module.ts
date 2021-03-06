import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { SellerLayoutComponent } from './pages/layout/seller-layout/seller-layout.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupProfComponent } from './pages/signup-prof/signup-prof.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AnuncioComponent } from './pages/seller/anuncio/anuncio.component';
import { SellerModule } from './pages/seller/seller/seller.module';
import { BuyerModule } from './pages/buyer/buyer.module';

const routes: Routes = [
 
  {
    path: '',
    loadChildren: () => BuyerModule
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
    loadChildren: () => SellerModule,
  },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
