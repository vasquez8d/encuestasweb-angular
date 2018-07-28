import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '../../../../node_modules/@angular/router';
import { EncuestadorasComponent } from './encuestadoras/encuestadoras.component';
import { HttpClientModule } from '../../../../node_modules/@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { EncuestasService } from '../../services/encuestas.service';
import { EncuestadorasService } from '../../services/encuestadoras.service';

const routes: Routes = [
  {
    path: 'encuestadoras/:encu_id/:encu_slug',
    component: EncuestadorasComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    SharedModule
  ],
  declarations: [EncuestadorasComponent],
  providers: [EncuestasService, EncuestadorasService]
})
export class EncuestasModule { }
