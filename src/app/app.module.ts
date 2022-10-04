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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    FotoPortadaComponent,
    FotoPerfilComponent,
    LoginComponent,
    PerfilInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
