import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './pages/landing/landing.component';
import { CompararComponent } from './pages/buyer/comparar/comparar.component'
import { LayoutComponent } from './pages/layout/layout.component';
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupProfComponent } from './pages/signup-prof/signup-prof.component';
import { SellerLayoutComponent } from './pages/layout/seller-layout/seller-layout.component';
import { InicioComponent } from './pages/seller/inicio/inicio.component';
@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LayoutComponent,
    CompararComponent,
    SignupComponent,
    LoginComponent,
    SignupProfComponent,
    SellerLayoutComponent,
    InicioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
