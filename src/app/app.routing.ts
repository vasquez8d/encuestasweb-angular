import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { TerminosCondicionesComponent } from './components/terminos-condiciones/terminos-condiciones.component';

const routes: Routes = [
    {
        path: '',
        loadChildren: './home/home.module#HomeModule'
    },
    {
        path: 'mod',
        loadChildren: './modules/modules.module#ModulesModule'
    },
    {
        path: 'terminos-condiciones',
        component: TerminosCondicionesComponent
    },
    {
        path: '**',
        component: NotfoundComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
