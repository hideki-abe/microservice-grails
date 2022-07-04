import { Component, OnInit } from '@angular/core';
import { CompetenciaService } from '../service';
import { Competencia } from '../model/competencia';


@Component({
  selector: 'app-cadastro-competencia',
  templateUrl: './cadastro-competencia.component.html',
  styleUrls: ['./cadastro-competencia.component.css']
})
export class CadastroCompetenciaComponent implements OnInit {

  competencias: Competencia[];

  constructor(private competenciaService: CompetenciaService) { 
  
  }

  ngOnInit(){
    this.list();
  }

  list(){
    this.competenciaService.listCompetencias().subscribe(competencias => {
      this.competencias = competencias;
      console.log(competencias);
    }, err => {
      console.log('Erro ao listar perfil', err);
    })
  }

}
