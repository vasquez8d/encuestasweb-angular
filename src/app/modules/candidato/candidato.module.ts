import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CandidatoComponent } from './candidato/candidato.component';
import { RouterModule, Routes } from '../../../../node_modules/@angular/router';
import { RegistroComponent } from './registro/registro.component';
import { ReactiveFormsModule, FormsModule } from '../../../../node_modules/@angular/forms';
import { CandidatoService } from '../../services/candidato.service';
import { HttpClientModule } from '../../../../node_modules/@angular/common/http';
import { UbigeoService } from '../../services/ubigeo.service';
import { PartidoPoliticoService } from '../../services/ppolitico.service';

const routes: Routes = [
  {
    path: '',
    component: CandidatoComponent
  },
  {
    path: 'registro',
    component: RegistroComponent
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [CandidatoComponent, RegistroComponent],
  providers: [CandidatoService, UbigeoService, PartidoPoliticoService]
})
export class CandidatoModule { }
