import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FotoPortadaComponent } from './foto-portada/foto-portada.component';
import { FotoPerfilComponent } from './foto-perfil/foto-perfil.component';
import { LoginComponent } from './modals/login/login.component';
import { PerfilInfoComponent } from './perfil-info/perfil-info.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { EducacionComponent } from './educacion/educacion.component';
import { EduUtnComponent } from './educacion/edu-utn/edu-utn.component';
import { Exp1Component } from './experiencia/exp1/exp1.component';
import { AcercaInfoComponent } from './acerca-de/acerca-info/acerca-info.component';
import { EduSecunComponent } from './educacion/edu-secun/edu-secun.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    FotoPortadaComponent,
    FotoPerfilComponent,
    LoginComponent,
    PerfilInfoComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    EducacionComponent,
    EduUtnComponent,
    Exp1Component,
    AcercaInfoComponent,
    EduSecunComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
