import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '../../../node_modules/@angular/router';
import { EncuestasComponent } from './encuestas/encuestas.component';
import { BannerComponent } from './banner/banner.component';
import { EncuestadorasService } from '../services/encuestadoras.service';
import { HttpClientModule } from '../../../node_modules/@angular/common/http';
import { EncuestasService } from '../services/encuestas.service';
import { SharedModule } from '../modules/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    SharedModule
  ],
  declarations: [HomeComponent, EncuestasComponent, BannerComponent],
  providers: [EncuestadorasService, EncuestasService]
})
export class HomeModule { }
