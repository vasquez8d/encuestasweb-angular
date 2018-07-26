import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AppRoutingModule } from './app.routing';
import { SharedModule } from './modules/shared/shared.module';
import { LoginComponent } from './components/login/login.component';
import { TerminosCondicionesComponent } from './components/terminos-condiciones/terminos-condiciones.component';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { ServicesConfig } from './config/services.config';

@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent,
    LoginComponent,
    TerminosCondicionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [ServicesConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
