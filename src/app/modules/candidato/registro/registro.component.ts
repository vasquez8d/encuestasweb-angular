import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CandidatoService } from '../../../services/candidato.service';
import { UbigeoService } from '../../../services/ubigeo.service';
import { PartidoPoliticoService } from '../../../services/ppolitico.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  CandidatoRegistroForm: FormGroup;
  CandidatoRegistroFormErros: any;

  listaTipoCandi = [];
  listaDepartamentos = [];
  ubg_dpt: 0;
  listaProvincias = [];
  listaDistritos = [];
  listaPartidos = [];

  constructor(
    private formBuilder: FormBuilder,
    private candidatoService: CandidatoService,
    private ubigeoService: UbigeoService,
    private partidoPoliticoService: PartidoPoliticoService
  ) {
    this.CandidatoRegistroFormErros = {
      cand_nombre: {},
      cand_ape_pat: {},
      cand_ape_mat: {},
      part_id: {},
      tcan_id: {},
      ubg_dpt: {},
      ubg_prv: {},
      ubg_dst: {},
    };
  }

  ngOnInit() {
    this.CandidatoRegistroForm = this.formBuilder.group({
      cand_nombre: ['', Validators.required],
      cand_ape_pat: ['', Validators.required],
      cand_ape_mat: ['', Validators.required],
      part_id: ['', Validators.required],
      tcan_id: ['', Validators.required],
      ubg_dpt: ['', Validators.required],
      ubg_prv: ['', Validators.required],
      ubg_dst: ['', Validators.required],
      cand_link_fb : [''],
      cand_link_twt : [''],
      cand_link_inst : ['']
    });
    this.CandidatoRegistroForm.valueChanges.subscribe(() => {
      this.onRegisterFormValuesChanged();
    });
    this.cargarListadoCandidatura();
    this.cargarDepartamentos();
    this.cargarPartidosPoliticos();
  }

  cargarListadoCandidatura() {
    this.candidatoService.listarCandidaturas().subscribe(
      data => {
        this.listaTipoCandi = data.data_result;
      }
    );
  }
  cargarDepartamentos() {
    this.ubigeoService.listarDepartamentos().subscribe(
      data => {
        this.listaDepartamentos = data.data_result;
      }
    );
  }

  cargarProvincias(value) {
    this.ubigeoService.listarProvincias(value).subscribe(
      data => {
        this.ubg_dpt = value;
        this.listaProvincias = data.data_result;
      }
    );
  }

  cargarDistritos(value) {
    this.ubigeoService.listarDistritos(this.ubg_dpt, value).subscribe(
      data => {
        this.listaDistritos = data.data_result;
      }
    );
  }

  cargarPartidosPoliticos() {
    this.partidoPoliticoService.listarPartidoPolitico().subscribe(
      data => {
        this.listaPartidos = data.data_result;
      }
    );
  }

  onRegisterFormValuesChanged() {
    for (const field in this.CandidatoRegistroFormErros) {
      if (!this.CandidatoRegistroFormErros.hasOwnProperty(field)) {
        continue;
      }

      // Clear previous errors
      this.CandidatoRegistroFormErros[field] = {};

      // Get the control
      const control = this.CandidatoRegistroForm.get(field);

      if (control && control.dirty && !control.valid) {
        this.CandidatoRegistroFormErros[field] = control.errors;
      }
    }
  }

  guardarCandidato() {
    console.log(this.CandidatoRegistroForm.value);
  }

}
