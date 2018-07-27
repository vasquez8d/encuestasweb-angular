import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EncuestaComponent } from './encuesta/encuesta.component';
import { Routes, RouterModule } from '../../../../node_modules/@angular/router';
import { HttpClientModule } from '../../../../node_modules/@angular/common/http';
import { EncuestaModel } from '../../models/encuesta.model';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: ':encs_id/:encs_slug',
    component: EncuestaComponent
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    SharedModule
  ],
  declarations: [EncuestaComponent],
  providers: [EncuestaModel]
})
export class EncuestaModule { }
