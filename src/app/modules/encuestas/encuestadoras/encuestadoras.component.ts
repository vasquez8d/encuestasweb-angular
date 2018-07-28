import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '../../../../../node_modules/@angular/router';
import { EncuestasService } from '../../../services/encuestas.service';
import { EncuestadorasService } from '../../../services/encuestadoras.service';

@Component({
  selector: 'app-encuestadoras',
  templateUrl: './encuestadoras.component.html',
  styleUrls: ['./encuestadoras.component.css']
})
export class EncuestadorasComponent implements OnInit {
  listEncuestadoraEncuestas = [];
  listPaginador = [];
  nombEncuestadora = '';
  showPaginator = false;
  constructor(private activatedRoute: ActivatedRoute,
              private encuestaService: EncuestasService,
              private encuestadoraService: EncuestadorasService,
              private router: Router) { }

  ngOnInit() {
    this.cargarEncuestaDetalle();
    this.cargarEncuestadoraDetalle();
  }

  cargarEncuestaDetalle() {
    this.activatedRoute.params.subscribe(params => {
      if (params.encu_id) {
        const bodyInitial = {
          limit: '3',
          offset: '0',
          encu_id: params.encu_id
        };
        this.encuestaService.listarxEncuestadora(bodyInitial).subscribe(
          data => {
            if (data.res_service === 'ok') {
              this.listEncuestadoraEncuestas = data.data_result;
              this.obtenerNumeroEncuestas(params.encu_id);
            } else {
              this.listEncuestadoraEncuestas = [];
            }
          }
        );
      }
    });
  }

  cargarEncuestadoraDetalle() {
    this.activatedRoute.params.subscribe(params => {
      if (params.encu_id) {
        this.encuestadoraService.detalleEncuestadora(params.encu_id).subscribe(
          data => {
            if (data.res_service === 'ok') {
              this.nombEncuestadora = data.data_result[0].encu_nombre;
            }
          }
        );
      }
    });
  }

  obtenerNumeroEncuestas(encu_id) {
    const body = {
      limit: '100',
      offset: '0',
      encu_id: encu_id
    };
    this.encuestaService.listarxEncuestadora(body).subscribe(
      data => {
        if (data.res_service === 'ok') {
          const numeroRegistros = data.data_result.length;
          if (numeroRegistros > 3) {
            const numeroPaginas = Math.ceil(( numeroRegistros / 3));
            let iniOffset = 0;
            for (let i = 1; i <= numeroPaginas; i++) {
              const page1 = {
                number: i,
                limit: '3',
                offset: iniOffset
              };
              iniOffset = iniOffset + 3;
              this.listPaginador.push(page1);
            }
            this.showPaginator = true;
          } else {
            this.showPaginator = false;
          }
        } else {
          this.listPaginador = [];
          this.showPaginator = false;
        }
      }
    );
  }

  navigateToEncuesta(encuestas) {
    this.router.navigateByUrl('mod/encuesta/' + encuestas.encs_id + '/' + encuestas.encs_slug);
  }

}
