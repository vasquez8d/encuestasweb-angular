import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: 'candidato',
        loadChildren: './candidato/candidato.module#CandidatoModule'
    },
    {
        path: 'encuestas',
        loadChildren: './encuestas/encuestas.module#EncuestasModule'
    },
    {
        path: 'encuesta',
        loadChildren: './encuesta/encuesta.module#EncuestaModule'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ModulesRoutingModule { }
