import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
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
import { AlquilerComponent } from './pages/seller/alquiler/alquiler.component';
import { RecambiosComponent } from './pages/seller/recambios/recambios.component';
import { RepuestosComponent } from './pages/seller/repuestos/repuestos.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnuncioComponent } from './pages/seller/anuncio/anuncio.component';
import { ResenasComponent } from './pages/seller/resenas/resenas.component';
import { MiTiendaComponent } from './pages/seller/mi-tienda/mi-tienda.component';
import { ComponentsModule } from './components/components.module';
import { ImportacionComponent } from './pages/seller/importacion/importacion.component';

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
    AlquilerComponent,
    RecambiosComponent,
    RepuestosComponent,
    AnuncioComponent,
    ResenasComponent,
    MiTiendaComponent,
    ImportacionComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselModule,
    BrowserAnimationsModule,
    ComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
