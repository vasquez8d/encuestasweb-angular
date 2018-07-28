import { Component, OnInit } from '@angular/core';
import { EncuestasService } from '../../../services/encuestas.service';
import { EncuestadorasService } from '../../../services/encuestadoras.service';
import { Router } from '../../../../../node_modules/@angular/router';

@Component({
  selector: 'app-ultimas-encuestas',
  templateUrl: './ultimas-encuestas.component.html',
  styleUrls: ['./ultimas-encuestas.component.css']
})
export class UltimasEncuestasComponent implements OnInit {
  listUltimasEncuestasRigth = [];
  listEncuestadoras = [];
  constructor(private encuestasService: EncuestasService,
              private encuestadoraService: EncuestadorasService,
              private router: Router) { }

  ngOnInit() {
    this.listarUltimasEncuestas();
    this.listarEncuestadoras();
  }
  listarUltimasEncuestas() {
    const body = {
      limit: '3',
      offset: '0'
    };
    this.encuestasService.listarEncuestas(body).subscribe(
      data => {
        this.listUltimasEncuestasRigth = data.data_result;
      }
    );
  }

  listarEncuestadoras() {
    this.encuestadoraService.listaEncuestadoras().subscribe(
      data => {
        if (data.res_service === 'ok') {
          this.listEncuestadoras = data.data_result;
        }
      }
    );
  }

  navigateEncuesta(encuesta) {
    this.router.navigateByUrl('mod/encuesta/' + encuesta.encs_id + '/' + encuesta.encs_slug);
  }

  navigateEncuestadora(encustadora) {
    this.router.navigateByUrl('mod/encuestas/encuestadoras/' + encustadora.encu_id + '/' + encustadora.encu_slug);
  }
}
