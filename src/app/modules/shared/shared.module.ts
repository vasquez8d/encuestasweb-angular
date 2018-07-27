import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '../../../../node_modules/@angular/router';
import { UltimasEncuestasComponent } from './ultimas-encuestas/ultimas-encuestas.component';
import { EncuestasService } from '../../services/encuestas.service';
import { HttpClientModule } from '../../../../node_modules/@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  declarations: [FooterComponent, HeaderComponent, UltimasEncuestasComponent],
  exports: [
    HeaderComponent,
    FooterComponent,
    UltimasEncuestasComponent
  ],
  providers: [EncuestasService]
})
export class SharedModule { }
