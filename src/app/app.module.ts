import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatSidenav } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { SideNavComponent } from './componentes/side-nav/side-nav.component';
import { HomeComponent } from './pages/home/home.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { Error404Component } from './pages/error404/error404.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { AvisoLegalComponent } from './pages/politicas/aviso-legal/aviso-legal.component';
import { CookiesComponent } from './pages/politicas/cookies/cookies.component';
import { PrivacidadComponent } from './pages/politicas/privacidad/privacidad.component';
import { CarouselComponent } from './componentes/carousel/carousel.component';
import { CardComponent } from './componentes/card/card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SliderClientesComponent } from './componentes/slider-clientes/slider-clientes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavComponent,
    HomeComponent,
    NosotrosComponent,
    ContactoComponent,
    ProyectosComponent,
    ServiciosComponent,
    ClientesComponent,
    Error404Component,
    FooterComponent,
    AvisoLegalComponent,
    CookiesComponent,
    PrivacidadComponent,
    CarouselComponent,
    SliderClientesComponent,
    // CardComponent
  ],
  imports: [
    MatSlideToggleModule,
    MatMenuModule,
    MatTabsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatSidenav,
    MatListModule,
    CardComponent,
    FontAwesomeModule
],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    provideHttpClient(withFetch())
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
