import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EncuestasComponent } from './encuestas/encuestas.component';
import { Routes, RouterModule } from '../../../../node_modules/@angular/router';

const routes: Routes = [
  {
    path: '',
    component: EncuestasComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [EncuestasComponent]
})
export class EncuestasModule { }
