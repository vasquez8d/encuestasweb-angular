import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../../../node_modules/@angular/router';
import { EncuestasService } from '../../../services/encuestas.service';
import { EncuestaModel } from '../../../models/encuesta.model';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css']
})
export class EncuestaComponent implements OnInit {

  public encuesta: EncuestaModel = new EncuestaModel;
  constructor(private activatedRoute: ActivatedRoute,
              private encuestaService: EncuestasService) { }

  ngOnInit() {
    this.cargarEncuestaDetalle();
  }

  cargarEncuestaDetalle() {
    this.activatedRoute.params.subscribe(params => {
      if (params.encs_id) {
        this.encuestaService.obtenerDetalleEncuesta(params.encs_id).subscribe(
          data => {
            this.encuesta = data.data_result[0];
          }
        );
      }
  });
  }
}
